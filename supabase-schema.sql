-- ============================================================
-- SUPABASE SQL SCHEMA
-- Muhammad Muti-ur-Rauf | PV Designer Portfolio
-- ============================================================
-- Safe to run multiple times (drops existing policies first)
-- Dashboard → SQL Editor → New Query → Paste & Run
-- ============================================================

-- Drop existing policies if re-running
DROP POLICY IF EXISTS "Public can read projects"    ON public.projects;
DROP POLICY IF EXISTS "Admin can insert projects"   ON public.projects;
DROP POLICY IF EXISTS "Admin can update projects"   ON public.projects;
DROP POLICY IF EXISTS "Admin can delete projects"   ON public.projects;
DROP POLICY IF EXISTS "Anyone can submit order"     ON public.orders;
DROP POLICY IF EXISTS "Admin can read orders"       ON public.orders;
DROP POLICY IF EXISTS "Admin can update orders"     ON public.orders;
DROP POLICY IF EXISTS "Admin can delete orders"     ON public.orders;


-- ============================================================
-- TABLE: projects
-- ============================================================
CREATE TABLE IF NOT EXISTS public.projects (
    id          bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category    text NOT NULL CHECK (category IN ('Industrial', 'Commercial', 'Residential')),
    title       text NOT NULL,
    youtube_url text NOT NULL,
    description text,
    drawing_link text,
    thumbnail_url text,
    featured    boolean DEFAULT false,
    created_at  timestamptz DEFAULT now() NOT NULL,
    updated_at  timestamptz DEFAULT now() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Public can read all projects (for the portfolio website)
CREATE POLICY "Public can read projects"
    ON public.projects
    FOR SELECT
    USING (true);

-- Only authenticated users (admins) can insert/update/delete
CREATE POLICY "Admin can insert projects"
    ON public.projects
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "Admin can update projects"
    ON public.projects
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Admin can delete projects"
    ON public.projects
    FOR DELETE
    TO authenticated
    USING (true);

-- Auto-update updated_at on row change
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_projects_updated_at
    BEFORE UPDATE ON public.projects
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();


-- ============================================================
-- TABLE: orders
-- ============================================================
CREATE TABLE IF NOT EXISTS public.orders (
    id                  bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    full_name           text NOT NULL,
    phone               text NOT NULL,
    email               text,
    company             text,
    project_type        text CHECK (project_type IN ('Industrial', 'Commercial', 'Residential')),
    system_size         text,
    location            text,
    message             text,
    drawing_link_field  text,
    status              text DEFAULT 'new' CHECK (status IN ('new', 'reviewed', 'completed', 'cancelled')),
    created_at          timestamptz DEFAULT now() NOT NULL,
    updated_at          timestamptz DEFAULT now() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Anyone can submit an order (for the public order form)
CREATE POLICY "Anyone can submit order"
    ON public.orders
    FOR INSERT
    WITH CHECK (true);

-- Only authenticated admins can read all orders
CREATE POLICY "Admin can read orders"
    ON public.orders
    FOR SELECT
    TO authenticated
    USING (true);

-- Only authenticated admins can update order status
CREATE POLICY "Admin can update orders"
    ON public.orders
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Only authenticated admins can delete orders
CREATE POLICY "Admin can delete orders"
    ON public.orders
    FOR DELETE
    TO authenticated
    USING (true);

-- Auto-update updated_at
CREATE TRIGGER set_orders_updated_at
    BEFORE UPDATE ON public.orders
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();


-- ============================================================
-- INDEXES (for performance)
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_projects_category    ON public.projects (category);
CREATE INDEX IF NOT EXISTS idx_projects_featured    ON public.projects (featured);
CREATE INDEX IF NOT EXISTS idx_projects_created_at  ON public.projects (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_orders_status        ON public.orders (status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at    ON public.orders (created_at DESC);


-- ============================================================
-- VERIFICATION QUERIES (run to confirm setup)
-- ============================================================
-- SELECT COUNT(*) FROM public.projects;
-- SELECT COUNT(*) FROM public.orders;
-- SELECT * FROM public.projects LIMIT 5;
-- SELECT * FROM public.orders LIMIT 5;
