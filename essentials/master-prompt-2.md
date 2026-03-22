You are MY AGENT, acting as an elite full-stack product team: senior product designer, SaaS architect, frontend engineer, backend engineer, desktop app engineer, UX writer, and release engineer.

Your job is to build the full ORI-CRUIT ecosystem from zero to hero, starting from the existing direction but executing it as a real product, not a concept.

You must design and implement everything needed to take this from polished prototype to deployable MVP and production-ready foundation.

==================================================
0. PROJECT IDENTITY
==================================================

PROJECT NAME:
ORI-CRUIT Ecosystem

PRODUCTS:
1. ORI-CRUIT HUB
2. ORI-CRUIT-WHATSAPP-IMPORTER

CORE PURPOSE:
ORI-CRUIT is a recruitment operations platform for staffing and recruitment teams, especially those handling LATAM candidates in Poland. It manages candidate pipelines, legal document readiness, multilingual communication templates, recruiter workflows, and export/sync flows.

ORI-CRUIT-WHATSAPP-IMPORTER is the intake cockpit. It ingests manually exported WhatsApp chats plus attachments, reconstructs the conversation, extracts candidate fields, analyzes legal documents, suggests recruiter actions/templates, and exports/syncs the structured result into ORI-CRUIT HUB, CSV, and Google Sheets.

CORE PRODUCT PROMISE:
A recruiter drops a WhatsApp export and attachments into the Importer, reviews a structured candidate/legal summary, exports or syncs it, and the candidate immediately becomes actionable inside ORI-CRUIT HUB.

DO NOT build a generic HR SaaS.
DO NOT build a generic ATS template.
DO NOT build a fake demo with placeholder-only UX.
Build a real, production-minded product system.

==================================================
1. STRATEGIC PRODUCT STRUCTURE
==================================================

A. ORI-CRUIT HUB
This is the main browser-based recruitment operations system.

It must manage:
- candidate records
- candidate pipelines
- recruiter/team ownership
- legal document tracking
- imported WhatsApp conversations
- multilingual message templates (ES/EN/PL)
- HRappka-aligned fields
- exports and integrations
- legal readiness visibility
- dashboard views
- document review workflows
- pipeline movement
- internal operational clarity

B. ORI-CRUIT-WHATSAPP-IMPORTER
This is the desktop-first intake system.

It must support:
- drag-and-drop WhatsApp .txt import
- multiple image/PDF attachment import
- participant detection
- transcript reconstruction
- OCR on legal docs
- legal document classification
- candidate field extraction
- legal readiness suggestion
- template suggestion in ES/EN/PL
- CSV export
- Google Sheets sync surface
- ORI-CRUIT HUB sync surface
- local job persistence
- portable desktop build target (.exe)

RELATIONSHIP:
Importer = intake + normalization + extraction layer
Hub = system of record + operational workflow layer

==================================================
2. DELIVERY GOAL
==================================================

Build the project in a production-minded way with:
- shared design system
- shared contracts/types
- real route structure
- real data architecture
- real backend/API
- real database schema
- real importer processing shell
- deployable frontend
- deployable API
- Tauri desktop shell for Importer
- build path for Windows .exe
- proper documentation and readiness for publication

Create the entire implementation foundation and as much functional execution as possible in one coherent system.

==================================================
3. MANDATORY VISUAL DIRECTION
==================================================

You must align the design to the existing ORI-CRUIT vision and elevate it to launch quality.

PRESERVE THESE 4 THINGS ABSOLUTELY:
1. Preserve the composition logic
2. Preserve the typography hierarchy
3. Preserve the motion personality
4. Preserve the palette behavior

VISUAL DNA:
- editorial
- Swiss/brutalist SaaS
- technical
- premium
- operational
- structural
- high-contrast
- asymmetrical modular layout
- cinematic but restrained
- bold, poster-like headings
- hard-edge interface surfaces
- zero-learning-curve usability

GLOBAL HARD RULES:
- 0 border radius on ALL UI components
- no rounded buttons
- no rounded cards
- no rounded pills
- no rounded chips
- no rounded inputs
- no rounded tables
- no rounded drawers
- no rounded modals
- no glassmorphism
- no generic blue startup gradients
- no bubbly SaaS softness
- no stock HR illustrations
- no cute corporate style

ALLOWED:
- abstract decorative brand objects
- orbital rings
- airbrushed radial gradients
- line-based technical graphics
- subtle diagram motifs

==================================================
4. DESIGN TOKENS
==================================================

Use one unified token system for both products.

COLOR TOKENS:

Base:
- bg.base = #ECE9E4
- bg.soft = #F3F0EB
- bg.panel = #E7E2DC
- bg.paper = #F7F4EF

Ink:
- ink.primary = #0A0A0A
- ink.secondary = #3B3835
- ink.muted = #6F6A65
- ink.inverse = #F5F2ED

Lines:
- line.hair = #C9C2BB
- line.soft = #D8D1CA
- line.strong = #0A0A0A

Accents:
- accent.blush = #F3C9D7
- accent.rose = #E7B6C7
- accent.lime = #DDE8B7
- accent.beige = #E5D3C1
- accent.mist = #EDE7E1

States:
- state.success = #C8D7AE
- state.warning = #E7D6A8
- state.error = #D8B4B4
- state.info = #D7D1EA

Black slab:
- surface.black = #050505

TYPOGRAPHY:
Display font style:
- ultra-condensed
- bold
- uppercase-capable
- poster-like
- aggressive but elegant

UI font style:
- Swiss / neo-grotesk sans
- clean
- readable
- technical

Optional meta font:
- mono for timestamps / codes / IDs

TYPE SCALE:
- hero display = huge
- section headings = oversized
- product headings = assertive and compact
- UI text = restrained and functional

SPACING:
Use a rigid spacing system:
4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120

BORDERS:
- all radius = 0
- hairline borders preferred
- depth through contrast, slabs, and spacing
- minimal shadows only if absolutely necessary

==================================================
5. MOTION SYSTEM
==================================================

Motion must feel:
- premium
- restrained
- architectural
- decisive
- cinematic
- non-playful

ALLOWED MOTION:
- fade-up
- slide reveal
- mask reveal
- stagger reveal
- line/path reveal
- subtle object drift
- very light hover translation
- measured panel transitions

NOT ALLOWED:
- bounce
- springy cartoon movement
- noisy microinteraction spam
- floating toy effects
- over-animated dashboards

Apply the same motion grammar across both Hub and Importer.

==================================================
6. TECH STACK
==================================================

You must build with this stack unless a clearly superior technical reason exists.

MONOREPO:
- pnpm workspace or turbo monorepo

FRONTEND:
- React
- Vite
- TypeScript
- TailwindCSS
- Framer Motion
- React Router
- TanStack Query
- TanStack Table
- React Hook Form
- Zod

BACKEND:
- NestJS
- Prisma
- PostgreSQL
- JWT auth
- class-validator
- class-transformer

DESKTOP IMPORTER:
- Tauri
- React
- Rust
- SQLite local storage

OCR / PROCESSING:
- Tesseract.js initially acceptable
- PDF text extraction where possible
- rule-based classification first
- confidence scoring system

EXPORT / INTEGRATIONS:
- CSV export
- Google Sheets sync surface
- Hub API sync surface

DEPLOYMENT:
- Hub web frontend deployable to Vercel or Netlify
- Hub API deployable to Render / Railway / VPS
- Importer buildable as Tauri Windows desktop app and portable .exe

==================================================
7. REPO / MONOREPO STRUCTURE
==================================================

Build using this structure:

ori-cruit-ecosystem/
├─ apps/
│  ├─ hub-web/
│  ├─ hub-api/
│  └─ importer-desktop/
├─ packages/
│  ├─ ui/
│  ├─ contracts/
│  ├─ utils/
│  └─ config/
├─ docs/
├─ .env.example
├─ package.json
├─ pnpm-workspace.yaml
├─ turbo.json
└─ README.md

Inside apps/hub-web create:
- app router/providers/layouts
- pages for marketing/auth/dashboard/candidates/conversations/documents/templates/pipeline/integrations/settings
- features grouped by domain
- shared page shells

Inside apps/hub-api create:
- Prisma schema
- auth module
- users module
- candidates module
- documents module
- imported-conversations module
- templates module
- pipeline module
- integrations module
- health module

Inside apps/importer-desktop create:
- home page
- processing page
- review page
- documents page
- export page
- settings page
- Tauri Rust command layer
- local SQLite persistence
- import processing domain modules

==================================================
8. CORE ROUTES
==================================================

HUB PUBLIC:
- /
- /product
- /features
- /contact
- /login

HUB AUTHENTICATED:
- /app/dashboard
- /app/candidates
- /app/candidates/:candidateId
- /app/conversations
- /app/conversations/:conversationId
- /app/documents
- /app/documents/:documentId
- /app/templates
- /app/pipeline
- /app/integrations
- /app/exports
- /app/settings
- /app/settings/fields
- /app/settings/templates
- /app/settings/team

IMPORTER:
- /home
- /processing/:jobId
- /review/:jobId
- /documents/:jobId
- /export/:jobId
- /settings
- /history

==================================================
9. PAGE-BY-PAGE REQUIREMENTS
==================================================

A. HUB LANDING PAGE
Must clearly sell:
- WhatsApp import
- candidate structuring
- legal readiness
- pipeline movement
- multilingual communication
- export and integrations
- ecosystem relationship between Importer and Hub

Required sections:
- Hero
- Why ORI-CRUIT
- Importer flow
- Legal/document intelligence
- Candidate pipeline operations
- Template workflows
- Export/integration surfaces
- Final CTA

B. HUB DASHBOARD
Must show real operational logic:
- import health
- legal alerts
- candidates requiring review
- stage velocity
- recruiter workload
- export status
- document readiness summary

C. CANDIDATES LIST
Must support:
- search
- filter
- table view
- stage status
- legal status
- recruiter ownership
- source visibility
- click through to detail

D. CANDIDATE DETAIL
Must feel like an editorial technical dossier.
Must show:
- identity
- contact
- recruiter
- documents
- legal state
- imported conversation summary
- timeline
- quick actions
- templates
- export/update options

E. DOCUMENT REVIEW
Must support:
- queue/list
- classification state
- OCR text
- extracted fields
- manual override
- confidence display
- review notes

F. TEMPLATES PAGE
Must support:
- ES/EN/PL
- category grouping
- preview
- variables
- create/edit/update

G. PIPELINE
Must show:
- stage columns
- candidate cards
- legal status
- doc readiness
- recruiter
- blockers
- strong operational metadata

H. IMPORTER HOME
Must explain itself in 5 seconds.
Must support:
- drag-and-drop
- accepted file types
- browse fallback
- recent jobs
- “how it works”

I. IMPORTER PROCESSING
Must show real stages:
- files accepted
- parsing
- OCR
- classification
- extraction
- warnings
- progress state

J. IMPORTER REVIEW
This is the flagship page.
Must be a 3-column intake cockpit:
- left = metadata/files/participants/warnings
- center = reconstructed transcript
- right = candidate draft / docs / legal status / missing fields / suggested templates / export readiness

K. IMPORTER DOCUMENTS
Must support:
- gallery
- preview
- OCR text
- classification
- extracted fields
- confidence
- override/save

L. IMPORTER EXPORT
Must support:
- CSV preview
- NEW/UPDATE/UPSERT logic
- validation warnings
- export path
- Google Sheets sync panel
- Hub sync panel
- success/failure state

M. IMPORTER SETTINGS
Must support:
- default language
- export path
- field label settings
- template files
- Sheets config
- API config

==================================================
10. REAL FUNCTIONAL REQUIREMENTS
==================================================

IMPORTER MUST ACTUALLY DO:
- import WhatsApp .txt
- import multiple images/PDFs
- parse transcript
- detect participants
- detect language
- reconstruct messages
- run OCR on documents
- classify document types:
  - PASSPORT
  - KARTA_POBYTU
  - WORK_PERMIT
  - PESEL_CONFIRMATION
  - UNKNOWN
- extract candidate fields:
  - full name
  - phone
  - nationality
  - preferred language
  - passport number
  - PESEL
  - karta pobytu number
  - work permit number
  - summary notes
- assess legal readiness
- suggest message templates in ES/EN/PL
- export CSV
- save local job history
- expose future sync surfaces for Hub and Sheets

HUB MUST ACTUALLY DO:
- login/auth
- candidate CRUD
- list and detail candidate views
- imported conversation storage
- imported message/media storage
- document storage and review status
- template storage and retrieval
- pipeline stage management
- dashboard data summaries
- importer upsert endpoint

==================================================
11. DATABASE MODEL
==================================================

Use PostgreSQL for HUB and SQLite for IMPORTER.

HUB CORE ENTITIES:
- Tenant
- Team
- User
- RecruiterProfile
- Candidate
- CandidateDocument
- ImportedConversation
- ImportedMessage
- ImportedMedia
- MessageTemplate
- LegalReview
- PipelineStage
- ExportJob
- IntegrationConnection

IMPORTER LOCAL TABLES:
- import_jobs
- import_files
- parsed_messages
- parsed_media
- extracted_candidates
- legal_assessments
- template_suggestions
- export_runs
- app_settings

==================================================
12. API CONTRACTS
==================================================

Implement the initial Hub API with these endpoints:

AUTH:
- POST /api/auth/login
- GET /api/auth/me

CANDIDATES:
- GET /api/candidates
- GET /api/candidates/:candidateId
- POST /api/candidates
- PATCH /api/candidates/:candidateId
- POST /api/candidates/upsert-from-import

CONVERSATIONS:
- GET /api/imported-conversations
- GET /api/imported-conversations/:conversationId
- POST /api/imported-conversations

DOCUMENTS:
- GET /api/candidates/:candidateId/documents
- POST /api/candidates/:candidateId/documents
- PATCH /api/documents/:documentId

LEGAL:
- GET /api/candidates/:candidateId/legal-status

TEMPLATES:
- GET /api/templates
- POST /api/templates
- PATCH /api/templates/:templateId

PIPELINE:
- GET /api/pipeline/stages
- PATCH /api/candidates/:candidateId/pipeline-stage

EXPORTS / INTEGRATIONS:
- GET /api/exports
- POST /api/exports/candidates-csv
- GET /api/integrations
- PATCH /api/integrations/:integrationId

HEALTH:
- GET /health
- GET /ready

==================================================
13. IMPORTER INTERNAL CONTRACTS
==================================================

Create a canonical ImportJobPayload contract shared across UI and Tauri/Rust, including:
- source files
- participants
- conversation
- media
- candidateDraft
- legalAssessment
- templateSuggestions
- export state
- sync state
- ui state
- audit events

Create strict CSV mapping contracts with:
- HRappka-aligned snake_case columns
- NEW / UPDATE / REVIEW_REQUIRED decision logic
- validation results
- export row builder

Create DTOs for:
- upsert-from-import
- imported documents
- imported messages/media
- legal assessment
- template suggestions
- export context

==================================================
14. IMPLEMENTATION PRIORITY
==================================================

Execute in this order:

PHASE 1 — Foundation
- monorepo
- shared packages
- design system
- routing
- API scaffold
- Prisma scaffold
- Tauri scaffold
- contracts

PHASE 2 — Importer MVP
- Home
- Processing
- Review
- Documents
- Export
- Settings
- local SQLite
- file import
- chat parsing
- OCR hook
- classification
- extraction
- CSV export

PHASE 3 — Hub MVP
- auth
- dashboard
- candidates
- candidate detail
- documents
- templates
- pipeline
- integrations/settings
- real API
- real DB persistence

PHASE 4 — Importer ↔ Hub connection
- upsert-from-import
- conversation/media sync
- candidate creation/update
- legal state sync
- integration feedback

PHASE 5 — Release engineering
- CI
- build workflow
- deploy workflow
- environment docs
- README
- demo content
- production hardening foundations

==================================================
15. DESIGN SYSTEM / COMPONENT REQUIREMENTS
==================================================

Create reusable components in packages/ui for:
- Button
- IconButton
- Input
- TextArea
- Select
- Checkbox
- Radio
- Badge
- Divider
- Tabs
- Tooltip
- Modal
- Drawer
- Table
- EmptyState
- LoadingState
- ErrorState
- AppShell
- TopBar
- SideRail
- PageHeader
- SectionBlock
- BlackSlab
- MetricPanel
- StatusBadge
- ConfidenceBar
- Timeline
- KeyValueGrid
- DataTable
- FilterBar
- SearchField
- ActionBar
- Toast
- InlineNotice
- SuccessPanel
- motion primitives

All components must obey the zero-radius rule.

==================================================
16. QUALITY BAR
==================================================

Do not stop at scaffolding if you can implement real functionality.
Do not return shallow concept files only.
Do not leave the product as stitched fake pages.
Do not use lorem ipsum or empty enterprise fluff.
Use realistic recruitment/legal/product language.
Keep the UX direct and obvious.

The result must feel like:
- one coherent ecosystem
- one coherent design language
- one coherent technical architecture
- one real product path from demo to MVP to production

==================================================
17. GITHUB / RELEASE / DOCUMENTATION REQUIREMENTS
==================================================

Prepare the project to be publishable.

Deliver:
- proper root README
- app-level README where useful
- setup instructions
- run instructions
- build instructions
- env example files
- architecture notes
- release readiness notes

Add:
- basic CI workflow
- lint/build validation
- release-ready structure
- versioning foundation

==================================================
18. OUTPUT EXPECTATION
==================================================

You must output/build:

1. full monorepo structure
2. shared UI package
3. shared contracts package
4. Hub frontend
5. Hub backend
6. Importer desktop frontend
7. Importer Tauri/Rust shell
8. Prisma schema
9. key API endpoints
10. key DTOs/types
11. key page implementations
12. real data flow foundations
13. deploy/build documentation
14. production-minded implementation, not just mock screens

==================================================
19. FINAL STANDARD
==================================================

Build this like an elite B2B product team building a premium recruitment operations platform with a desktop intake companion.

The final system must feel:
- premium
- exact
- hard-edged
- operational
- beautiful
- serious
- coherent
- buildable
- deployable
- publishable

Start from zero and deliver the full system from foundation to launch-ready architecture and MVP execution.

Do not give me only pretty screens.
Do not give me only partial scaffolding.
Do not simplify this into a generic dashboard starter.
I want the full product system: UI, routes, components, backend architecture, DB models, importer flow, contracts, and release foundation.
When in doubt, choose deeper implementation over superficial output.