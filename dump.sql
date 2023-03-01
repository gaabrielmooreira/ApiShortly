--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2 (Ubuntu 15.2-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.2 (Ubuntu 15.2-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: shortUrls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."shortUrls" (
    id integer NOT NULL,
    code text NOT NULL,
    url text NOT NULL,
    "userId" integer NOT NULL,
    views bigint DEFAULT 0 NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: shortUrls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."shortUrls_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: shortUrls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."shortUrls_id_seq" OWNED BY public."shortUrls".id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    email character varying(100) NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: shortUrls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."shortUrls" ALTER COLUMN id SET DEFAULT nextval('public."shortUrls_id_seq"'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: shortUrls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."shortUrls" VALUES (4, 's6N1TF', 'https://www.google.com', 2, 1, '2023-02-28 14:51:26.539972');
INSERT INTO public."shortUrls" VALUES (5, '-hte_F', 'https://www.facebook.com', 2, 0, '2023-03-01 11:07:21.617423');
INSERT INTO public."shortUrls" VALUES (6, 'JsBcrN', 'https://www.orkut.com', 2, 0, '2023-03-01 11:07:27.67657');
INSERT INTO public."shortUrls" VALUES (7, 'JSa52P', 'https://www.orkut.com', 2, 0, '2023-03-01 11:12:28.913175');
INSERT INTO public."shortUrls" VALUES (9, 'pB9uwB', 'https://www.memes.com', 1, 0, '2023-03-01 11:39:44.691607');
INSERT INTO public."shortUrls" VALUES (10, 'yEkOGL', 'https://www.explorer.com', 1, 0, '2023-03-01 11:39:50.349811');
INSERT INTO public."shortUrls" VALUES (8, 'valfMQ', 'https://www.internet.com', 1, 5, '2023-03-01 11:39:41.661754');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'maria', 'maria@gmail.com', '$2b$10$1O2qJnhlFYwg4LQFH/vS4uDtyTDvsH2Cmg9vmxuNB3gZgQxMniSgu', '2023-02-28 11:16:05.700622');
INSERT INTO public.users VALUES (2, 'gabriel', 'gabriel@gmail.com', '$2b$10$0HYVlWbE.y0OiL7U0ydBj.H6kCbQy90J2qnIl9PNtqfQSFdpyXuue', '2023-02-28 14:50:58.835184');
INSERT INTO public.users VALUES (3, 'roberto', 'roberto@gmail.com', '$2b$10$Wg8boEtMKiVe3xu2SSPCEeCRO6dQYlMABCoMJTdpeVt3rsB3bB87O', '2023-03-01 12:07:41.246603');


--
-- Name: shortUrls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."shortUrls_id_seq"', 10, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- Name: shortUrls shortUrls_code_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."shortUrls"
    ADD CONSTRAINT "shortUrls_code_key" UNIQUE (code);


--
-- Name: shortUrls shortUrls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."shortUrls"
    ADD CONSTRAINT "shortUrls_pkey" PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: shortUrls shortUrls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."shortUrls"
    ADD CONSTRAINT "shortUrls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

