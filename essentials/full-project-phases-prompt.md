Recommended implementation roadmap
Phase 1 — Foundation, architecture, and shared design system

This is where we lock the product skeleton so both apps feel like one ecosystem.

Contains

monorepo / repo structure

shared design tokens

shared UI primitives

typography system

color system

motion primitives

base shell layouts

route scaffolding

API contract scaffolding

DB schema draft

auth strategy

environment setup

Tauri shell setup for Importer

React shell setup for ORI-CRUIT Hub

NestJS API bootstrap

Prisma bootstrap

shared type/contracts package

Output

A production-minded skeleton that both products can grow from consistently.

Phase 2 — ORI-CRUIT-WHATSAPP-IMPORTER MVP

This is the first thing that must become usable fast.

Contains

drag-and-drop import

WhatsApp .txt parsing

file inventory

participant detection

reconstructed chat UI

media preview support

OCR pipeline

document classification

extracted candidate fields panel

template suggestion panel

CSV export

local persistence

settings

error/success/loading states

Windows .exe packaging

Output

A recruiter can use it for real work.

Phase 3 — ORI-CRUIT Hub MVP

This becomes the operational dashboard.

Contains

login/auth

dashboard

candidates list

candidate detail

imported conversations view

document review screen

templates center

pipeline board

export/integrations page

settings

core API endpoints

PostgreSQL schema v1

Output

A real browser-based hub that stores and visualizes recruitment operations.

Phase 4 — Importer ↔ Hub integration

This phase connects both worlds.

Contains

sync protocol

API-based import jobs

candidate upsert from importer

imported conversation ingestion

media metadata linkage

legal status calculation pipeline

sync result states

duplicate handling

conflict resolution rules

field mapping validation

Output

The Importer no longer ends in CSV only. It becomes part of the ecosystem.

Phase 5 — Operational depth and multi-tenant maturity

This is where it stops being an MVP and starts feeling like a real SaaS.

Contains

recruiter roles

team roles

admin roles

multi-tenant isolation

legal review history

recruiter ownership

audit logs

advanced filters

template variables

language fallback logic

better missing-doc logic

assignment readiness logic

queue/history improvements

Output

The system becomes usable by multiple teams safely and predictably.

Phase 6 — Hardening for production and distribution

This is the engineering maturity pass.

Contains

validation hardening

auth hardening

permission enforcement

file upload/storage hardening

retry logic

background job reliability

packaging stabilization

Tauri desktop build stability

browser deployment stability

installer or portable distribution refinement

logging

metrics

error tracking

performance tuning

Output

The product becomes safe to run live.

Phase 7 — Launch readiness and publication assets

This is not just code. This is go-live readiness.

Contains

marketing pages

onboarding copy

in-app empty states

training/help docs

recruiter quickstart

README/internal docs

deployment docs

release checklist

analytics

SEO for public site

privacy / legal pages

support flows

versioning and changelog

Output

The product is not only functional — it is presentable and publishable.

Phase 8 — Post-launch optimization

After live publication, this is the growth pass.

Contains

usage analytics review

UX friction fixes

OCR accuracy improvements

AI template refinement

advanced search

candidate deduplication improvements

performance tuning

mobile/responsive refinement

future HRappka/API automations

future browser version of Importer

Output

The product evolves from good to strong.

Recommended release logic

If we keep it practical:

First internal release

Phase 1

Phase 2

First usable ecosystem release

Phase 3

Phase 4

First production-grade public release

Phase 5

Phase 6

Phase 7

So the real answer is:

You are planning 8 phases total

But the first major milestone is:

Phase 1 + Phase 2 + enough of Phase 3 to prove the ecosystem

Tactical Phase 1 execution map

This Phase 1 is not “just setup.”
It is the base layer for the full project toward production publicity.

1) Phase 1 goals
Primary objective

Create the shared foundation for:

consistent UI

shared contracts

scalable architecture

future deployment in browser and Tauri desktop

future portable .exe distribution

clean backend/API growth

Definition of done

By the end of Phase 1, you should have:

ORI-CRUIT

frontend shell

backend shell

auth scaffolding

route scaffolding

initial pages wired

design system active

Importer

Tauri shell

React desktop UI shell

route/page scaffolding

drag zone placeholder

review shell placeholder

export shell placeholder

local persistence scaffolding

Shared

tokens

components

contracts

base models

API shape draft

folder standards

build scripts

environment templates

2) Phase 1 monorepo folder structure

This is the structure I recommend.

ori-cruit-ecosystem/
├─ apps/
│  ├─ hub-web/
│  │  ├─ public/
│  │  └─ src/
│  │     ├─ app/
│  │     │  ├─ router/
│  │     │  ├─ providers/
│  │     │  ├─ layouts/
│  │     │  └─ guards/
│  │     ├─ pages/
│  │     │  ├─ marketing/
│  │     │  ├─ auth/
│  │     │  ├─ dashboard/
│  │     │  ├─ candidates/
│  │     │  ├─ conversations/
│  │     │  ├─ documents/
│  │     │  ├─ templates/
│  │     │  ├─ pipeline/
│  │     │  ├─ integrations/
│  │     │  └─ settings/
│  │     ├─ features/
│  │     │  ├─ auth/
│  │     │  ├─ candidates/
│  │     │  ├─ conversations/
│  │     │  ├─ documents/
│  │     │  ├─ templates/
│  │     │  ├─ pipeline/
│  │     │  ├─ exports/
│  │     │  └─ teams/
│  │     ├─ components/
│  │     │  ├─ primitives/
│  │     │  ├─ layout/
│  │     │  ├─ data-display/
│  │     │  ├─ forms/
│  │     │  ├─ feedback/
│  │     │  └─ motion/
│  │     ├─ hooks/
│  │     ├─ services/
│  │     ├─ lib/
│  │     ├─ styles/
│  │     └─ types/
│  │
│  ├─ hub-api/
│  │  ├─ prisma/
│  │  │  ├─ schema.prisma
│  │  │  ├─ migrations/
│  │  │  └─ seed/
│  │  ├─ src/
│  │  │  ├─ main.ts
│  │  │  ├─ app.module.ts
│  │  │  ├─ common/
│  │  │  │  ├─ guards/
│  │  │  │  ├─ interceptors/
│  │  │  │  ├─ filters/
│  │  │  │  ├─ decorators/
│  │  │  │  └─ utils/
│  │  │  ├─ config/
│  │  │  ├─ modules/
│  │  │  │  ├─ auth/
│  │  │  │  ├─ users/
│  │  │  │  ├─ recruiters/
│  │  │  │  ├─ teams/
│  │  │  │  ├─ candidates/
│  │  │  │  ├─ documents/
│  │  │  │  ├─ imported-conversations/
│  │  │  │  ├─ templates/
│  │  │  │  ├─ pipeline/
│  │  │  │  ├─ exports/
│  │  │  │  ├─ integrations/
│  │  │  │  ├─ legal-reviews/
│  │  │  │  └─ health/
│  │  │  └─ database/
│  │  └─ test/
│  │
│  └─ importer-desktop/
│     ├─ public/
│     ├─ src/
│     │  ├─ app/
│     │  │  ├─ router/
│     │  │  ├─ providers/
│     │  │  └─ layouts/
│     │  ├─ pages/
│     │  │  ├─ home/
│     │  │  ├─ processing/
│     │  │  ├─ review/
│     │  │  ├─documents/
│     │  │  ├─ export/
│     │  │  └─ settings/
│     │  ├─ features/
│     │  │  ├─ import-jobs/
│     │  │  ├─ chat-parser/
│     │  │  ├─ ocr/
│     │  │  ├─ document-classification/
│     │  │  ├─ candidate-extraction/
│     │  │  ├─ templates/
│     │  │  ├─ csv-export/
│     │  │  ├─ sheets-sync/
│     │  │  └─ api-sync/
│     │  ├─ components/
│     │  │  ├─ primitives/
│     │  │  ├─ layout/
│     │  │  ├─ import/
│     │  │  ├─ chat/
│     │  │  ├─ documents/
│     │  │  ├─ export/
│     │  │  ├─ feedback/
│     │  │  └─ motion/
│     │  ├─ hooks/
│     │  ├─ services/
│     │  ├─ lib/
│     │  ├─ styles/
│     │  └─ types/
│     ├─ src-tauri/
│     │  ├─ src/
│     │  │  ├─ main.rs
│     │  │  ├─ commands/
│     │  │  ├─ parsing/
│     │  │  ├─ ocr/
│     │  │  ├─ export/
│     │  │  ├─ db/
│     │  │  ├─ sheets/
│     │  │  ├─ sync/
│     │  │  └─ utils/
│     │  ├─ icons/
│     │  ├─ tauri.conf.json
│     │  └─ Cargo.toml
│     └─ test/
│
├─ packages/
│  ├─ ui/
│  │  ├─ src/
│  │  │  ├─ tokens/
│  │  │  ├─ primitives/
│  │  │  ├─ layout/
│  │  │  ├─ data-display/
│  │  │  ├─ forms/
│  │  │  ├─ feedback/
│  │  │  ├─ motion/
│  │  │  └─ index.ts
│  │  └─ package.json
│  │
│  ├─ contracts/
│  │  ├─ src/
│  │  │  ├─ candidate/
│  │  │  ├─ conversation/
│  │  │  ├─ document/
│  │  │  ├─ template/
│  │  │  ├─ export/
│  │  │  ├─ integration/
│  │  │  ├─ auth/
│  │  │  ├─ enums/
│  │  │  └─ index.ts
│  │  └─ package.json
│  │
│  ├─ config/
│  │  ├─ eslint/
│  │  ├─ tsconfig/
│  │  └─ tailwind/
│  │
│  └─ utils/
│     ├─ src/
│     └─ package.json
│
├─ docs/
│  ├─ architecture/
│  ├─ api/
│  ├─ design-system/
│  ├─ flows/
│  ├─ launch/
│  └─ decisions/
│
├─ .env.example
├─ package.json
├─ pnpm-workspace.yaml
├─ turbo.json
└─ README.md
3) Phase 1 component tree

This is the practical component hierarchy to start with.

Shared UI package
packages/ui/src/
├─ tokens/
│  ├─ colors.ts
│  ├─ typography.ts
│  ├─ spacing.ts
│  ├─ borders.ts
│  ├─ motion.ts
│  └─ index.ts
├─ primitives/
│  ├─ Button.tsx
│  ├─ IconButton.tsx
│  ├─ Input.tsx
│  ├─ TextArea.tsx
│  ├─ Select.tsx
│  ├─ Checkbox.tsx
│  ├─ Radio.tsx
│  ├─ Badge.tsx
│  ├─ Divider.tsx
│  ├─ Tabs.tsx
│  ├─ Tooltip.tsx
│  ├─ Modal.tsx
│  ├─ Drawer.tsx
│  ├─ Table.tsx
│  ├─ EmptyState.tsx
│  ├─ LoadingState.tsx
│  ├─ ErrorState.tsx
│  └─ index.ts
├─ layout/
│  ├─ AppShell.tsx
│  ├─ TopBar.tsx
│  ├─ SideRail.tsx
│  ├─ ContentGrid.tsx
│  ├─ PageHeader.tsx
│  ├─ SectionBlock.tsx
│  ├─ BlackSlab.tsx
│  └─ index.ts
├─ data-display/
│  ├─ MetricPanel.tsx
│  ├─ StatusBadge.tsx
│  ├─ ConfidenceBar.tsx
│  ├─ Timeline.tsx
│  ├─ KeyValueGrid.tsx
│  ├─ RecordPanel.tsx
│  ├─ DataTable.tsx
│  └─ index.ts
├─ forms/
│  ├─ FormField.tsx
│  ├─ FilterBar.tsx
│  ├─ SearchField.tsx
│  ├─ ActionBar.tsx
│  └─ index.ts
├─ feedback/
│  ├─ Toast.tsx
│  ├─ InlineNotice.tsx
│  ├─ SuccessPanel.tsx
│  └─ index.ts
└─ motion/
   ├─ FadeIn.tsx
   ├─ RevealMask.tsx
   ├─ StaggerGroup.tsx
   ├─ DriftObject.tsx
   ├─ LineReveal.tsx
   └─ index.ts
ORI-CRUIT Hub feature components
hub-web/src/features/
├─ auth/
│  ├─ LoginForm.tsx
│  └─ AuthGuard.tsx
├─ candidates/
│  ├─ CandidateTable.tsx
│  ├─ CandidateFilters.tsx
│  ├─ CandidateStatusStrip.tsx
│  ├─ CandidateIdentityPanel.tsx
│  ├─ CandidateDocumentSummary.tsx
│  ├─ CandidateTimeline.tsx
│  ├─ CandidateQuickActions.tsx
│  └─ CandidateFieldGrid.tsx
├─ conversations/
│  ├─ ImportJobsTable.tsx
│  ├─ ConversationSummaryPanel.tsx
│  ├─ MessageTranscript.tsx
│  ├─ MediaGallery.tsx
│  └─ ConversationMetadata.tsx
├─ documents/
│  ├─ DocumentQueueTable.tsx
│  ├─ DocumentPreviewPanel.tsx
│  ├─ OCRTextPanel.tsx
│  ├─ DocumentClassificationPanel.tsx
│  └─ MissingDocsPanel.tsx
├─ templates/
│  ├─ TemplateList.tsx
│  ├─ TemplatePreview.tsx
│  ├─ TemplateVariablesPanel.tsx
│  └─ LanguageSwitcher.tsx
├─ pipeline/
│  ├─ PipelineBoard.tsx
│  ├─ PipelineColumn.tsx
│  ├─ PipelineCard.tsx
│  └─ StageHeader.tsx
├─ exports/
│  ├─ ExportJobsTable.tsx
│  ├─ FieldMappingPanel.tsx
│  ├─ SyncStatusPanel.tsx
│  └─ ExportActionPanel.tsx
└─ teams/
   ├─ RecruiterTable.tsx
   ├─ TeamOverview.tsx
   └─ ActivityFeed.tsx
Importer feature components
importer-desktop/src/features/
├─ import-jobs/
│  ├─ DropZone.tsx
│  ├─ FileInventory.tsx
│  ├─ ImportProgressPanel.tsx
│  ├─ ParticipantMapper.tsx
│  └─ JobHistoryList.tsx
├─ chat-parser/
│  ├─ ChatTranscript.tsx
│  ├─ ChatMessageBlock.tsx
│  ├─ ChatTimestamp.tsx
│  ├─ SenderRoleBadge.tsx
│  └─ AttachmentInlineCard.tsx
├─ ocr/
│  ├─ OCRJobPanel.tsx
│  ├─ OCRTextPreview.tsx
│  └─ OCRConfidenceBar.tsx
├─ document-classification/
│  ├─ DocumentGallery.tsx
│  ├─ DocumentClassificationCard.tsx
│  ├─ DocumentFieldsGrid.tsx
│  └─ OverrideClassificationPanel.tsx
├─ candidate-extraction/
│  ├─ ExtractedCandidatePanel.tsx
│  ├─ MissingFieldPanel.tsx
│  ├─ LegalStatusPanel.tsx
│  └─ ExtractionConfidencePanel.tsx
├─ templates/
│  ├─ SuggestedTemplatesPanel.tsx
│  ├─ TemplateCard.tsx
│  └─ LanguageRecommendationBadge.tsx
├─ csv-export/
│  ├─ CSVPreviewTable.tsx
│  ├─ ExportSummaryPanel.tsx
│  └─ NewUpdateBreakdown.tsx
├─ sheets-sync/
│  ├─ SheetsAuthPanel.tsx
│  └─ SheetsSyncStatus.tsx
└─ api-sync/
   ├─ ApiSyncPanel.tsx
   ├─ SyncResultPanel.tsx
   └─ ConflictResolutionPanel.tsx
4) Phase 1 route map
ORI-CRUIT Hub routes
Public
/
 /product
 /features
 /legal
 /contact
 /login
Authenticated app
/app
/app/dashboard
/app/candidates
/app/candidates/:candidateId
/app/conversations
/app/conversations/:conversationId
/app/documents
/app/documents/:documentId
/app/templates
/app/pipeline
/app/integrations
/app/exports
/app/settings
/app/settings/fields
/app/settings/templates
/app/settings/team
Phase 1 actual routing priority

In Phase 1, you only need to wire these with placeholders or shell pages:

/app/dashboard
/app/candidates
/app/candidates/:candidateId
/app/conversations
/app/documents
/app/templates
/app/pipeline
/app/integrations
/app/settings
Importer desktop routes

Tauri can still use route-style page architecture internally.

/
 /home
 /processing/:jobId
 /review/:jobId
 /documents/:jobId
 /export/:jobId
 /settings
 /history
Phase 1 routing priority
/home
/processing/:jobId
/review/:jobId
/export/:jobId
/settings
5) Phase 1 database entity map

You need two data layers.

A. ORI-CRUIT Hub database — PostgreSQL

These are the base entities.

User

Represents authenticated platform users.

Fields

id

email

password_hash

full_name

role

is_active

team_id

created_at

updated_at

Team

Represents recruiter groups / tenant subdivisions.

Fields

id

name

tenant_id

created_at

updated_at

Tenant

Represents the client org / staffing org boundary.

Fields

id

name

slug

status

created_at

updated_at

RecruiterProfile

User extension for recruiter-specific identity.

Fields

id

user_id

phone

language_preferences

created_at

updated_at

Candidate

Main candidate record.

Fields

id

tenant_id

assigned_recruiter_id

external_candidate_id

first_name

last_name

full_name

gender

phone

email

nationality

country_of_residence

date_of_birth

pesel

passport_number

karta_pobytu_number

work_permit_number

current_status

pipeline_stage_id

preferred_language

notes

source

source_ref

is_active

created_at

updated_at

CandidateDocument

Legal documents linked to candidate.

Fields

id

candidate_id

document_type

document_number

issuing_country

expiry_date

issue_date

status

confidence_score

extracted_text

file_url

import_media_id

created_at

updated_at

ImportedConversation

Represents one import job or synced conversation.

Fields

id

tenant_id

import_source

recruiter_id

candidate_id

phone_detected

language_detected

summary

status

source_file_name

imported_at

created_at

updated_at

ImportedMessage

Individual parsed message.

Fields

id

conversation_id

sender_role

sender_name

message_text

sent_at

has_media

sequence_no

created_at

ImportedMedia

Images/PDFs/files from import.

Fields

id

conversation_id

message_id

media_type

file_name

mime_type

file_url

ocr_status

classification_status

created_at

updated_at

MessageTemplate

Template repository.

Fields

id

tenant_id

code

name

language

category

body

variables_schema

is_active

created_at

updated_at

LegalReview

Human/legal review log.

Fields

id

candidate_id

reviewer_id

result_status

notes

missing_documents

reviewed_at

created_at

PipelineStage

Stage configuration.

Fields

id

tenant_id

code

label

sort_order

is_active

created_at

updated_at

ExportJob

Tracks CSV/export jobs.

Fields

id

tenant_id

initiated_by

export_type

target

status

file_url

payload_snapshot

created_at

updated_at

IntegrationConnection

Google Sheets / HRappka / API connections.

Fields

id

tenant_id

integration_type

config_json

auth_status

last_synced_at

created_at

updated_at

B. Importer local database — SQLite

The Importer also needs local tables.

import_jobs

id

job_name

status

source_chat_file

created_at

updated_at

import_files

id

job_id

file_name

file_type

file_path

mime_type

size_bytes

created_at

parsed_messages

id

job_id

sequence_no

sender_role

sender_name

message_text

sent_at

has_media

created_at

parsed_media

id

job_id

linked_message_id

file_name

media_type

local_path

ocr_text

ocr_confidence

classification

created_at

updated_at

extracted_candidates

id

job_id

full_name

phone

nationality

preferred_language

extracted_json

confidence_score

created_at

updated_at

legal_assessments

id

job_id

assessment_status

missing_docs_json

notes

created_at

updated_at

template_suggestions

id

job_id

template_code

language

suggestion_reason

created_at

export_runs

id

job_id

export_type

status

output_path

created_at

updated_at

app_settings

id

key

value

updated_at

6) API contract draft — ORI-CRUIT Hub

This is the backend API your ecosystem should grow around.

Auth
POST /api/auth/login

Request:

{
  "email": "user@example.com",
  "password": "secret"
}

Response:

{
  "accessToken": "jwt",
  "user": {
    "id": "usr_123",
    "email": "user@example.com",
    "fullName": "Recruiter Name",
    "role": "recruiter",
    "teamId": "team_1"
  }
}
Candidates
GET /api/candidates

Query:

search

stage

legalStatus

recruiterId

page

limit

Response:

{
  "items": [],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 0
  }
}
GET /api/candidates/:candidateId

Response:

{
  "id": "cand_1",
  "fullName": "John Doe",
  "phone": "+48...",
  "nationality": "Cuban",
  "preferredLanguage": "es",
  "pipelineStage": {
    "id": "stage_1",
    "code": "NEW_CONTACT",
    "label": "New Contact"
  },
  "legalStatus": "PARTIAL",
  "assignedRecruiter": {
    "id": "usr_1",
    "fullName": "Ana"
  },
  "documents": [],
  "recentConversation": {},
  "missingDocuments": []
}
POST /api/candidates

Create manual candidate.

PATCH /api/candidates/:candidateId

Update candidate record.

Candidate upsert from importer
POST /api/candidates/upsert-from-import

This is one of the most important endpoints.

Request:

{
  "source": "WHATSAPP_IMPORTER",
  "jobId": "job_1",
  "candidate": {
    "fullName": "John Doe",
    "phone": "+48555111222",
    "preferredLanguage": "es",
    "nationality": "Cuban"
  },
  "documents": [
    {
      "documentType": "PASSPORT",
      "documentNumber": "AB123456",
      "expiryDate": "2028-01-01",
      "confidenceScore": 0.82
    }
  ],
  "conversation": {
    "summary": "Candidate sent passport and asked about work permit",
    "messages": [],
    "media": []
  },
  "legalAssessment": {
    "status": "PARTIAL",
    "missingDocuments": ["WORK_PERMIT"]
  }
}

Response:

{
  "result": "UPDATED",
  "candidateId": "cand_123",
  "conversationId": "conv_123",
  "warnings": []
}
Imported conversations
POST /api/imported-conversations

Creates conversation first, before full candidate linkage if needed.

GET /api/imported-conversations

List imported jobs.

GET /api/imported-conversations/:conversationId

Get full transcript, summary, linked candidate, media.

Documents
GET /api/candidates/:candidateId/documents
POST /api/candidates/:candidateId/documents
PATCH /api/documents/:documentId
Legal status
GET /api/candidates/:candidateId/legal-status

Response:

{
  "candidateId": "cand_123",
  "status": "PARTIAL",
  "missingDocuments": ["KARTA_POBYTU"],
  "documentsSummary": {
    "passport": "VALID",
    "kartaPobytu": "MISSING",
    "workPermit": "PENDING"
  },
  "lastReviewedAt": "2026-03-17T10:20:00Z"
}
Templates
GET /api/templates

Query:

lang

code

category

POST /api/templates
PATCH /api/templates/:templateId
Pipeline
GET /api/pipeline/stages
PATCH /api/candidates/:candidateId/pipeline-stage

Request:

{
  "stageId": "stage_ready_assignment"
}
Exports / integrations
POST /api/exports/candidates-csv
GET /api/exports
GET /api/integrations
PATCH /api/integrations/:integrationId
7) Importer local contract draft

The Importer is desktop-first, so it should expose internal command contracts between React and Tauri Rust.

Tauri commands
start_import_job

Input:

{
  "chatFilePath": "C:/imports/chat.txt",
  "attachmentPaths": [
    "C:/imports/passport.jpg",
    "C:/imports/permit.pdf"
  ]
}

Output:

{
  "jobId": "job_123",
  "status": "PROCESSING"
}
parse_whatsapp_chat

Input:

{
  "jobId": "job_123"
}

Output:

{
  "participants": [
    { "name": "Ana", "role": "RECRUITER" },
    { "name": "Carlos", "role": "CANDIDATE" }
  ],
  "messageCount": 124,
  "languageDetected": "es"
}
run_ocr_on_media

Input:

{
  "jobId": "job_123"
}

Output:

{
  "processed": 5,
  "documentsDetected": 3,
  "warnings": []
}
classify_documents

Input:

{
  "jobId": "job_123"
}

Output:

{
  "documents": [
    {
      "fileName": "passport.jpg",
      "classification": "PASSPORT",
      "confidence": 0.88
    }
  ]
}
extract_candidate_data

Input:

{
  "jobId": "job_123"
}

Output:

{
  "candidate": {
    "fullName": "Carlos Perez",
    "phone": "+48...",
    "nationality": "Cuban",
    "preferredLanguage": "es"
  },
  "missingFields": ["email"],
  "confidence": 0.79
}
suggest_templates

Input:

{
  "jobId": "job_123"
}

Output:

{
  "templates": [
    {
      "code": "LEGAL_DOCS_REQUEST_BASE",
      "language": "es",
      "reason": "Candidate missing karta pobytu"
    }
  ]
}
export_csv

Input:

{
  "jobId": "job_123",
  "mode": "UPSERT"
}

Output:

{
  "status": "SUCCESS",
  "filePath": "C:/exports/candidates.csv",
  "newCount": 1,
  "updateCount": 0
}
sync_google_sheets

Input:

{
  "jobId": "job_123",
  "sheetId": "sheet_abc"
}

Output:

{
  "status": "SUCCESS",
  "rowsSynced": 1
}
push_to_hub_api

Input:

{
  "jobId": "job_123",
  "apiBaseUrl": "https://api.ori-cruit.com",
  "token": "jwt"
}

Output:

{
  "status": "SUCCESS",
  "candidateId": "cand_123",
  "conversationId": "conv_123"
}
8) Phase 1 task breakdown
Workstream A — repo and tooling

create monorepo

configure workspace

set linting/formatting

add env templates

add docs structure

add build scripts

Workstream B — design system

implement tokens

implement base primitives

implement shell layout

implement motion primitives

enforce zero-radius globally

Workstream C — hub shell

app shell

auth scaffolding

page route scaffolds

placeholder feature modules

API client layer

Workstream D — api shell

Nest bootstrap

Prisma bootstrap

auth module

candidate module scaffold

imported conversations module scaffold

templates module scaffold

Workstream E — importer shell

Tauri bootstrap

React desktop shell

page route scaffolds

command invocation layer

local persistence scaffold

Workstream F — shared contracts

enums

DTOs

candidate contracts

document contracts

import job contracts

template contracts

9) What Phase 1 should not try to finish

To keep momentum, Phase 1 should not attempt:

full OCR logic

full Sheets OAuth

final legal rules engine

full multi-tenant permissions

full polished export engine

perfect candidate deduplication

production installer pipeline

Phase 1 is about structure, consistency, and future-proof execution.

10) Best implementation order inside Phase 1

This is the order I’d use:

repo + workspace + shared config

tokens + typography + zero-radius primitives

hub-web shell

importer-desktop shell

shared contracts

hub-api modules and Prisma schema skeleton

page scaffolds and route map

placeholder integration flow between Importer and Hub

That order will keep visual consistency and technical consistency aligned from day one.

11) My strong recommendation for the overall plan

If you want this to become publishable without chaos, think of it like this:

Real build path

Phase 1 = skeleton

Phase 2 = first useful tool

Phase 3 = first useful platform

Phase 4 = ecosystem connection

Phase 5–7 = production seriousness

Phase 8 = growth

That is the cleanest path.




Phase 2 — Tactical execution plan
Phase 2 objective

Deliver the first working ORI-CRUIT-WHATSAPP-IMPORTER MVP with real recruiter value, while also laying the minimum API/backend groundwork so the data model does not drift away from the Hub.

Phase 2 success criteria

By the end of Phase 2, a recruiter should be able to:

open the desktop app

drag in a WhatsApp .txt export plus document files

see the conversation reconstructed

see detected documents and extracted fields

get a basic legal-readiness interpretation

receive message template suggestions in ES/EN/PL

export a working CSV

optionally preview future sync targets

That is the first real “wow, this works” moment.

Phase 2 scope
In scope

Importer desktop MVP

core processing pipeline

chat reconstruction UI

OCR + document classification MVP

extracted candidate view

template suggestions

CSV export

local SQLite persistence

settings

production-minded Tauri packaging

Partially in scope

Hub-facing contracts

minimal Hub API scaffold compatibility

mock or disabled sync panels

Out of scope for Phase 2

full Hub dashboards

advanced auth

deep team permissions

perfect OCR

real-time collaboration

advanced AI/legal reasoning

installer polish

full Google Sheets OAuth production hardening

Phase 2 implementation order

This is the sequence I would use.

Step 1 — Build the Importer UI shell

Before logic gets deep, the flow must exist visually and structurally.

Screens to build first

Home / Drop screen

Processing screen

Review screen

Export screen

Settings screen

Error / Empty / Success states

These should already reflect the final brand system:

zero-radius

editorial hierarchy

black slabs

muted pastel gradients

hard-edge panels

premium motion

Step 2 — Implement the file import pipeline

Once shell exists, make drag-and-drop actually work.

Must support

one WhatsApp .txt

multiple images

multiple PDFs

file inventory list

basic validation

job creation in local SQLite

Result

The app can start a real import job and store it locally.

Step 3 — Implement WhatsApp chat parsing

This is the first real product intelligence layer.

Must parse

timestamps

sender name

message text

order/sequence

attachment references if available

basic language hinting

Result

A structured transcript exists and can be shown in the center review panel.

Step 4 — Implement OCR pipeline

This is the second intelligence layer.

Must handle

image OCR

PDF text extraction where possible

OCR result storage

basic confidence score

association to file/media record

Result

Documents become machine-readable enough for classification and export.

Step 5 — Implement document classification

This turns OCR text into recruiter value.

Initial classification targets

PASSPORT

KARTA_POBYTU

WORK_PERMIT

PESEL_CONFIRMATION

UNKNOWN_DOCUMENT

Result

The right panel can show detected docs and their probable type.

Step 6 — Implement candidate field extraction

Now the importer turns loose data into structured HR fields.

Initial fields to extract

full_name

phone

nationality

preferred_language

passport_number

pesel

karta_pobytu_number

work_permit_number

notes summary

Result

The recruiter sees an editable candidate record draft.

Step 7 — Implement template suggestion logic

This gives immediate operational value.

First logic version

Use rule-based suggestions:

candidate language = ES / EN / PL

missing docs = suggest legal docs request template

docs complete = suggest next-step or confirmation template

unclear status = suggest clarification template

Result

The app feels assistant-like, not just analytical.

Step 8 — Implement CSV export

This is the most critical output layer.

Must support

NEW vs UPDATE logic

CSV preview

export file path

required HRappka-aligned columns

stable export success/failure handling

Result

Even before full Hub sync, the app is operationally useful.

Step 9 — Add sync placeholders

Even if disabled, the architecture must already anticipate them.

Panels

Google Sheets sync

ORI-CRUIT API sync

In Phase 2

These may be:

mock-enabled

partially wired

feature-flagged

Result

The UI and data contracts stay aligned with future phases.

Exact screens to build first

Here’s the practical screen order.

1. Home / Drop screen

This must be built first.

Contains

giant editorial headline

concise explainer

drag-and-drop zone

accepted file types

quick “How it works”

previous jobs/history shortcut

Must feel like

“Drop the export here. We take care of the chaos.”

2. Processing screen

This should be built second.

Contains

job header

file inventory

parsing progress

OCR progress

classification progress

warning state

cancel/restart actions

Purpose

Make background processing visible and trustworthy.

3. Review screen

This is the most important screen in the whole app.

3-column layout
Left rail

job metadata

file list

detected participants

language

warnings

quick actions

Center

reconstructed chat transcript

timestamps

sender role

media markers

Right rail

extracted candidate data

detected documents

legal status

missing fields

suggested templates

Purpose

This is the operational cockpit.

4. Document analysis screen

This can be a dedicated route or a review sub-mode.

Contains

document thumbnails/gallery

selected preview

OCR text

classified type

extracted fields

confidence score

override action

Purpose

Allow recruiter correction and trust-building.

5. Export screen

This is the final action screen.

Contains

CSV preview

NEW/UPDATE breakdown

export destination

Google Sheets panel

ORI-CRUIT sync panel

result notices

Purpose

Make the outcome obvious and safe.

6. Settings screen

This should be basic in Phase 2, but real.

Contains

default language

export path

field label mode

template file path

API base URL placeholder

Sheets connection placeholder
Phase 2 folder structure additions

This is how Phase 1 structure evolves in Phase 2.

apps/importer-desktop/
├─ src/
│  ├─ pages/
│  │  ├─ home/
│  │  │  ├─ HomePage.tsx
│  │  │  └─ HomePage.sections.tsx
│  │  ├─ processing/
│  │  │  └─ ProcessingPage.tsx
│  │  ├─ review/
│  │  │  └─ ReviewPage.tsx
│  │  ├─ documents/
│  │  │  └─ DocumentsPage.tsx
│  │  ├─ export/
│  │  │  └─ ExportPage.tsx
│  │  └─ settings/
│  │     └─ SettingsPage.tsx
│  ├─ features/
│  │  ├─ import-jobs/
│  │  │  ├─ store.ts
│  │  │  ├─ api.ts
│  │  │  ├─ schemas.ts
│  │  │  └─ hooks.ts
│  │  ├─ chat-parser/
│  │  ├─ ocr/
│  │  ├─ document-classification/
│  │  ├─ candidate-extraction/
│  │  ├─ templates/
│  │  ├─ csv-export/
│  │  ├─ sheets-sync/
│  │  └─ api-sync/
│  ├─ state/
│  │  ├─ app-store.ts
│  │  ├─ job-store.ts
│  │  └─ settings-store.ts
│  ├─ services/
│  │  ├─ tauri.ts
│  │  ├─ export.ts
│  │  └─ sync.ts
│  └─ types/
│
├─ src-tauri/
│  ├─ src/
│  │  ├─ commands/
│  │  │  ├─ import_jobs.rs
│  │  │  ├─ parsing.rs
│  │  │  ├─ ocr.rs
│  │  │  ├─ classification.rs
│  │  │  ├─ extraction.rs
│  │  │  ├─ export.rs
│  │  │  ├─ sheets.rs
│  │  │  └─ sync.rs
│  │  ├─ db/
│  │  │  ├─ sqlite.rs
│  │  │  ├─ models.rs
│  │  │  └─ migrations.rs
│  │  ├─ parsing/
│  │  │  ├─ whatsapp_parser.rs
│  │  │  └─ language_detector.rs
│  │  ├─ ocr/
│  │  │  ├─ tesseract_adapter.rs
│  │  │  └─ pdf_text.rs
│  │  ├─ export/
│  │  │  ├─ csv_builder.rs
│  │  │  └─ hrappka_mapping.rs
│  │  └─ sync/
│  │     ├─ sheets_client.rs
│  │     └─ hub_client.rs
Phase 2 component tree
Importer page composition
HomePage

HeroStatement

DropZone

AcceptedFilesBlock

HowItWorksBlock

RecentJobsBlock

ProcessingPage

ProcessingHeader

ImportProgressPanel

FileInventory

ParticipantMapper

StageLogPanel

WarningPanel

ReviewPage

ReviewHeader

JobMetaRail

ChatTranscript

DocumentSummaryRail

ExtractedCandidatePanel

LegalStatusPanel

SuggestedTemplatesPanel

QuickFixPanel

DocumentsPage

DocumentGallery

DocumentPreviewPanel

OCRTextPreview

DocumentClassificationCard

DocumentFieldsGrid

OverrideClassificationPanel

ExportPage

ExportSummaryPanel

CSVPreviewTable

NewUpdateBreakdown

SheetsSyncPanel

ApiSyncPanel

SuccessPanel

SettingsPage

LanguageSettingsCard

ExportSettingsCard

TemplatePathCard

FieldLabelSettingsCard

SyncSettingsCard

First Prisma schema draft

This should start lean. Do not try to model the universe in one go.

Initial enums
enum UserRole {
  ADMIN
  TEAM_LEAD
  RECRUITER
}

enum PipelineStageCode {
  NEW_CONTACT
  DOCS_PENDING
  DOCS_PARTIAL
  LEGAL_REVIEW
  READY_FOR_ASSIGNMENT
  ON_HOLD
  REJECTED
}

enum DocumentType {
  PASSPORT
  KARTA_POBYTU
  WORK_PERMIT
  PESEL_CONFIRMATION
  UNKNOWN
}

enum DocumentStatus {
  DETECTED
  VALID
  PARTIAL
  MISSING
  EXPIRED
  UNREADABLE
  NEEDS_REVIEW
}

enum ConversationStatus {
  IMPORTED
  PARSED
  LINKED
  FAILED
}

enum TemplateLanguage {
  ES
  EN
  PL
}

enum TemplateCategory {
  INITIAL_OUTREACH
  LEGAL_DOCS_REQUEST
  FOLLOW_UP
  MISSING_INFO
  ASSIGNMENT_READY
}
Initial models
model Tenant {
  id         String   @id @default(cuid())
  name       String
  slug       String   @unique
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt

  teams      Team[]
  users      User[]
  candidates Candidate[]
  templates  MessageTemplate[]
}

model Team {
  id         String   @id @default(cuid())
  tenantId   String
  name       String
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt

  tenant     Tenant   @relation(fields: [tenantId], references: [id])
  users      User[]
}

model User {
  id           String   @id @default(cuid())
  tenantId     String
  teamId       String?
  email        String   @unique
  passwordHash String
  fullName     String
  role         UserRole
  isActive     Boolean  @default(true)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt

  tenant       Tenant   @relation(fields: [tenantId], references: [id])
  team         Team?    @relation(fields: [teamId], references: [id])

  assignedCandidates Candidate[] @relation("AssignedRecruiter")
  imports            ImportedConversation[] @relation("ImportedByUser")
  legalReviews       LegalReview[]
}

model PipelineStage {
  id         String            @id @default(cuid())
  tenantId   String
  code       PipelineStageCode
  label      String
  sortOrder  Int
  createdAt  DateTime          @default(now())
  updatedAt  DateTime          @updatedAt

  candidates Candidate[]
}

model Candidate {
  id                  String   @id @default(cuid())
  tenantId            String
  assignedRecruiterId String?
  pipelineStageId     String?
  externalCandidateId String?
  firstName           String?
  lastName            String?
  fullName            String
  phone               String?
  email               String?
  nationality         String?
  preferredLanguage   TemplateLanguage?
  dateOfBirth         DateTime?
  pesel               String?
  passportNumber      String?
  kartaPobytuNumber   String?
  workPermitNumber    String?
  source              String?
  sourceRef           String?
  notes               String?
  createdAt           DateTime @default(now())
  updatedAt           DateTime @updatedAt

  tenant              Tenant   @relation(fields: [tenantId], references: [id])
  assignedRecruiter   User?    @relation("AssignedRecruiter", fields: [assignedRecruiterId], references: [id])
  pipelineStage       PipelineStage? @relation(fields: [pipelineStageId], references: [id])

  documents           CandidateDocument[]
  conversations       ImportedConversation[]
  legalReviews        LegalReview[]
}

model CandidateDocument {
  id               String         @id @default(cuid())
  candidateId      String
  documentType     DocumentType
  documentNumber   String?
  expiryDate       DateTime?
  issueDate        DateTime?
  status           DocumentStatus
  confidenceScore  Float?
  extractedText    String?
  fileUrl          String?
  createdAt        DateTime       @default(now())
  updatedAt        DateTime       @updatedAt

  candidate        Candidate      @relation(fields: [candidateId], references: [id])
}

model ImportedConversation {
  id               String             @id @default(cuid())
  tenantId         String
  recruiterId      String?
  candidateId      String?
  sourceFileName   String?
  phoneDetected    String?
  languageDetected TemplateLanguage?
  summary          String?
  status           ConversationStatus
  importedAt       DateTime           @default(now())
  createdAt        DateTime           @default(now())
  updatedAt        DateTime           @updatedAt

  tenant           Tenant             @relation(fields: [tenantId], references: [id])
  recruiter        User?              @relation("ImportedByUser", fields: [recruiterId], references: [id])
  candidate        Candidate?         @relation(fields: [candidateId], references: [id])

  messages         ImportedMessage[]
  media            ImportedMedia[]
}

model ImportedMessage {
  id              String   @id @default(cuid())
  conversationId  String
  senderRole      String
  senderName      String?
  messageText     String?
  sentAt          DateTime?
  hasMedia        Boolean  @default(false)
  sequenceNo      Int
  createdAt       DateTime @default(now())

  conversation    ImportedConversation @relation(fields: [conversationId], references: [id])
}

model ImportedMedia {
  id               String   @id @default(cuid())
  conversationId   String
  messageId        String?
  mediaType        String
  fileName         String
  mimeType         String?
  fileUrl          String?
  ocrStatus        String?
  classification   String?
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt

  conversation     ImportedConversation @relation(fields: [conversationId], references: [id])
}

model MessageTemplate {
  id              String            @id @default(cuid())
  tenantId        String
  code            String
  name            String
  language        TemplateLanguage
  category        TemplateCategory
  body            String
  isActive        Boolean           @default(true)
  createdAt       DateTime          @default(now())
  updatedAt       DateTime          @updatedAt

  tenant          Tenant            @relation(fields: [tenantId], references: [id])

  @@index([tenantId, language, category])
}

model LegalReview {
  id               String   @id @default(cuid())
  candidateId      String
  reviewerId       String
  resultStatus     String
  notes            String?
  missingDocuments Json?
  reviewedAt       DateTime @default(now())

  candidate         Candidate @relation(fields: [candidateId], references: [id])
  reviewer          User      @relation(fields: [reviewerId], references: [id])
}

This is enough to begin. Clean, not bloated.

First NestJS module list

Keep it lean in this order.

Must build first
1. auth

Handles:

login

JWT generation

basic guards

current user endpoint

2. users

Handles:

current user profile

basic user listing if needed

recruiter profile basics

3. candidates

Handles:

candidate CRUD

candidate list

candidate detail

upsert-from-import

pipeline-stage patch

4. imported-conversations

Handles:

create conversation import

get conversation list

get one conversation

nested messages/media retrieval

5. documents

Handles:

candidate documents

add/update documents

document review listing

6. templates

Handles:

list by lang/category/code

create/update templates

7. pipeline

Handles:

stage listing

candidate stage change

simple board grouping

8. health

Handles:

/health

/ready

Can wait until slightly later in Phase 2 / early Phase 3

teams

integrations

exports

legal-reviews

audit

Recommended NestJS folder detail
apps/hub-api/src/modules/
├─ auth/
│  ├─ auth.module.ts
│  ├─ auth.controller.ts
│  ├─ auth.service.ts
│  ├─ dto/
│  └─ strategies/
├─ users/
├─ candidates/
│  ├─ candidates.module.ts
│  ├─ candidates.controller.ts
│  ├─ candidates.service.ts
│  ├─ dto/
│  │  ├─ create-candidate.dto.ts
│  │  ├─ update-candidate.dto.ts
│  │  ├─ upsert-from-import.dto.ts
│  │  └─ candidate-query.dto.ts
│  └─ mappers/
├─ imported-conversations/
├─ documents/
├─ templates/
├─ pipeline/
└─ health/
First API implementation order

Do not implement everything at once.

Order

POST /api/auth/login

GET /api/candidates

GET /api/candidates/:candidateId

POST /api/candidates/upsert-from-import

GET /api/templates

GET /api/pipeline/stages

POST /api/imported-conversations

GET /api/imported-conversations/:conversationId

That gives enough backend surface for the Importer and early Hub.

Tauri command implementation order

This is the right order so the app becomes useful as early as possible.

Tier 1 — Core commands

start_import_job

list_import_jobs

get_import_job

parse_whatsapp_chat

These create the minimum working flow.

Tier 2 — Real extraction

run_ocr_on_media

classify_documents

extract_candidate_data

suggest_templates

These create the assistant-like experience.

Tier 3 — Action/output

export_csv

save_job_edits

open_export_folder

These make the product operational.

Tier 4 — Future sync

sync_google_sheets

push_to_hub_api

These can be feature-flagged until stable.

First Tauri command signatures

Here’s the clean first command surface.

#[tauri::command]
fn start_import_job(chat_file_path: String, attachment_paths: Vec<String>) -> Result<ImportJobResponse, String>;

#[tauri::command]
fn list_import_jobs() -> Result<Vec<ImportJobListItem>, String>;

#[tauri::command]
fn get_import_job(job_id: String) -> Result<ImportJobDetail, String>;

#[tauri::command]
fn parse_whatsapp_chat(job_id: String) -> Result<ParseChatResponse, String>;

#[tauri::command]
fn run_ocr_on_media(job_id: String) -> Result<OcrRunResponse, String>;

#[tauri::command]
fn classify_documents(job_id: String) -> Result<DocumentClassificationResponse, String>;

#[tauri::command]
fn extract_candidate_data(job_id: String) -> Result<CandidateExtractionResponse, String>;

#[tauri::command]
fn suggest_templates(job_id: String) -> Result<TemplateSuggestionResponse, String>;

#[tauri::command]
fn export_csv(job_id: String, mode: String) -> Result<ExportCsvResponse, String>;

That is enough to get moving fast.

Phase 2 data flow

This is the real runtime sequence.

Importer runtime flow

User drops .txt + attachments

App creates local import job

App parses WhatsApp transcript

App stores messages and media locally

OCR runs on media

Classification runs on OCR results

Candidate extraction runs on transcript + docs

Template suggestion runs on extracted state

Review page renders combined result

Recruiter edits if needed

CSV export generates final output

Optional sync panels become available

That is the Phase 2 truth.

Phase 2 UI states that must exist

This matters a lot. The MVP fails if states are missing.

Required states

empty

dragging

parsing

OCR in progress

classification in progress

partial success

export success

no documents found

unreadable document

missing candidate phone

unsupported file type

duplicate job name or duplicate import warning

API sync disabled

Sheets not connected

Do not build only happy-path screens.

Phase 2 deliverables list

By the end of this phase, Antigravity/build team should produce:

Importer

real desktop app shell

working drag-and-drop flow

job persistence

transcript rendering

document OCR hooks

document classification MVP

extracted candidate panel

template suggestion panel

CSV export flow

settings screen

.exe build path

Backend readiness

Prisma v1 schema

NestJS module scaffolds

first auth endpoint

first candidate endpoints

importer-compatible upsert endpoint draft

templates endpoint

pipeline stages endpoint

Design readiness

exact design tokens applied

shared primitives in place

shared motion system applied

consistent brand between Hub and Importer

Phase 3 preview

So you see the continuity:

After this, Phase 3 becomes straightforward

Because once Phase 2 exists, Phase 3 mainly becomes:

plug the same candidate/document/conversation logic into the Hub

replace placeholders with real browser workflows

connect Importer output to persistent hub records

That is why Phase 2 must be done with discipline.




Phase 2.1 — Implementation pack

This pack contains:

exact screen wire hierarchy

exact JSON schema for importer job payload

exact CSV field mapping draft

exact DTOs for upsert-from-import

implementation notes so this stays aligned with production

1) Screen wire hierarchy

These are not visual mockups.
These are screen composition blueprints.

1.1 Importer — Home / Drop screen
Route

/home

Purpose

Let recruiter understand the app instantly and start a job in one action.

Wire hierarchy
AppShell
├─ TopUtilityBar
│  ├─ AppMark
│  ├─ HistoryButton
│  ├─ SettingsButton
│  └─ HelpButton
│
├─ MainCanvas
│  ├─ HeroBlock
│  │  ├─ EyebrowLabel
│  │  ├─ HeroHeadline
│  │  ├─ HeroSubcopy
│  │  └─ HeroMetaRow
│  │
│  ├─ DropZoneBlock
│  │  ├─ DropZoneSurface
│  │  │  ├─ DropIcon / Graphic
│  │  │  ├─ DropTitle
│  │  │  ├─ DropHint
│  │  │  ├─ AcceptedTypesRow
│  │  │  └─ BrowseFilesButton
│  │  └─ DropZoneFootnote
│  │
│  ├─ SideInfoBlock
│  │  ├─ HowItWorksPanel
│  │  ├─ SupportedDocumentsPanel
│  │  └─ PrivacyNotePanel
│  │
│  └─ RecentJobsBlock
│     ├─ RecentJobsHeader
│     └─ RecentJobsList
│
└─ AmbientBrandObjects
Functional elements

drag/drop target

browse fallback

file type validation

open recent jobs

navigate to settings

1.2 Importer — Processing screen
Route

/processing/:jobId

Purpose

Show the app is actively doing structured work, not frozen guessing.

Wire hierarchy
AppShell
├─ ProcessingTopBar
│  ├─ BackButton
│  ├─ JobTitle
│  ├─ JobStatusBadge
│  └─ CancelButton
│
├─ MainCanvas
│  ├─ ProcessingHeader
│  │  ├─ LargeHeadline
│  │  ├─ ProgressSummary
│  │  └─ StageProgressBar
│  │
│  ├─ LeftRail
│  │  ├─ FileInventoryPanel
│  │  ├─ ParticipantDetectionPanel
│  │  └─ LanguageDetectionPanel
│  │
│  ├─ CenterPanel
│  │  ├─ StageTimeline
│  │  ├─ ParsingLogPanel
│  │  └─ OCRQueuePanel
│  │
│  └─ RightRail
│     ├─ WarningsPanel
│     ├─ InterimSummaryPanel
│     └─ NextStepPanel
│
└─ AmbientBrandObjects
Processing stages

file intake

chat parsing

media linking

OCR

document classification

candidate extraction

template suggestion precompute

1.3 Importer — Review screen
Route

/review/:jobId

Purpose

This is the main operating screen.

Wire hierarchy
AppShell
├─ ReviewTopBar
│  ├─ JobIdentity
│  ├─ SaveEditsButton
│  ├─ ReprocessButton
│  └─ ExportButton
│
├─ MainCanvas
│  ├─ ReviewHeaderStrip
│  │  ├─ CandidateNameOrFallback
│  │  ├─ Phone
│  │  ├─ PreferredLanguage
│  │  ├─ LegalStatusBadge
│  │  └─ MissingDocsCount
│  │
│  ├─ ThreeColumnGrid
│  │  ├─ LeftRail
│  │  │  ├─ JobMetadataPanel
│  │  │  ├─ FileInventoryPanel
│  │  │  ├─ ParticipantMappingPanel
│  │  │  ├─ WarningsPanel
│  │  │  └─ QuickActionsPanel
│  │  │
│  │  ├─ CenterTranscriptPanel
│  │  │  ├─ TranscriptToolbar
│  │  │  ├─ ChatTranscript
│  │  │  │  ├─ DateDivider
│  │  │  │  ├─ ChatMessageBlock[]
│  │  │  │  └─ AttachmentInlineCard[]
│  │  │  └─ TranscriptFooter
│  │  │
│  │  └─ RightAnalysisRail
│  │     ├─ ExtractedCandidatePanel
│  │     ├─ DetectedDocumentsPanel
│  │     ├─ LegalStatusPanel
│  │     ├─ MissingFieldsPanel
│  │     ├─ SuggestedTemplatesPanel
│  │     └─ ExportReadinessPanel
│  │
│  └─ InlineEditDrawers
│     ├─ EditCandidateFieldDrawer
│     ├─ EditDocumentDrawer
│     └─ EditTemplateDrawer
│
└─ AmbientBrandObjects
Must support

recruiter edits

field overrides

document override

template selection/copy

navigation to export screen

1.4 Importer — Documents screen
Route

/documents/:jobId

Purpose

Deep review of OCR/classification.

Wire hierarchy
AppShell
├─ DocumentsTopBar
│  ├─ BackToReviewButton
│  ├─ JobTitle
│  └─ SelectedDocumentMeta
│
├─ MainCanvas
│  ├─ LeftGalleryRail
│  │  ├─ DocumentFilterTabs
│  │  └─ DocumentThumbnailList
│  │
│  ├─ CenterPreviewPanel
│  │  ├─ DocumentPreviewSurface
│  │  ├─ ZoomControls
│  │  └─ PageControls
│  │
│  └─ RightAnalysisRail
│     ├─ ClassificationResultPanel
│     ├─ OCRTextPanel
│     ├─ ExtractedDocFieldsPanel
│     ├─ ConfidencePanel
│     ├─ OverrideClassificationPanel
│     └─ SaveDocumentEditsPanel
│
└─ AmbientBrandObjects
1.5 Importer — Export screen
Route

/export/:jobId

Purpose

Convert analysis into reliable output.

Wire hierarchy
AppShell
├─ ExportTopBar
│  ├─ BackToReviewButton
│  ├─ JobTitle
│  └─ ExportStatusBadge
│
├─ MainCanvas
│  ├─ ExportHeader
│  │  ├─ LargeHeadline
│  │  ├─ SummaryLine
│  │  └─ ExportModeSelector
│  │
│  ├─ LeftColumn
│  │  ├─ ExportSummaryPanel
│  │  ├─ NewUpdateBreakdownPanel
│  │  ├─ ValidationWarningsPanel
│  │  └─ OutputPathPanel
│  │
│  ├─ CenterColumn
│  │  └─ CSVPreviewTable
│  │
│  └─ RightColumn
│     ├─ CSVExportActionPanel
│     ├─ SheetsSyncPanel
│     ├─ HubSyncPanel
│     └─ SuccessOrFailurePanel
│
└─ AmbientBrandObjects
1.6 Importer — Settings screen
Route

/settings

Wire hierarchy
AppShell
├─ SettingsTopBar
│  ├─ BackButton
│  └─ SaveSettingsButton
│
├─ MainCanvas
│  ├─ SettingsHeader
│  ├─ SettingsGrid
│  │  ├─ GeneralSettingsPanel
│  │  ├─ ExportDefaultsPanel
│  │  ├─ TemplatePathsPanel
│  │  ├─ FieldLabelsPanel
│  │  ├─ SheetsSettingsPanel
│  │  └─ ApiSettingsPanel
│  └─ ResetAndDiagnosticsPanel
│
└─ AmbientBrandObjects
2) Exact JSON schema for importer job payload

This is the canonical job object the desktop app should use internally between:

UI

local DB mapping

Tauri commands

export logic

future API sync

Use this as the source of truth.

{
  "jobId": "job_01HXYZ123ABC",
  "version": "1.0.0",
  "status": "REVIEW_READY",
  "createdAt": "2026-03-17T10:20:00.000Z",
  "updatedAt": "2026-03-17T10:23:10.000Z",
  "source": {
    "type": "WHATSAPP_EXPORT",
    "chatFile": {
      "name": "chat.txt",
      "path": "C:/imports/chat.txt",
      "mimeType": "text/plain",
      "sizeBytes": 48291,
      "checksum": "sha256-hash"
    },
    "attachments": [
      {
        "id": "file_1",
        "name": "passport.jpg",
        "path": "C:/imports/passport.jpg",
        "mimeType": "image/jpeg",
        "sizeBytes": 392002,
        "checksum": "sha256-hash"
      },
      {
        "id": "file_2",
        "name": "permit.pdf",
        "path": "C:/imports/permit.pdf",
        "mimeType": "application/pdf",
        "sizeBytes": 880121,
        "checksum": "sha256-hash"
      }
    ]
  },
  "participants": {
    "detected": [
      {
        "name": "Ana Recruiter",
        "role": "RECRUITER",
        "confidence": 0.93
      },
      {
        "name": "Carlos Perez",
        "role": "CANDIDATE",
        "confidence": 0.91
      }
    ],
    "candidateDisplayName": "Carlos Perez",
    "recruiterDisplayName": "Ana Recruiter"
  },
  "conversation": {
    "languageDetected": "ES",
    "summary": "Candidate sent passport, asked about work permit, missing karta pobytu.",
    "messageCount": 124,
    "messages": [
      {
        "id": "msg_1",
        "sequenceNo": 1,
        "senderRole": "RECRUITER",
        "senderName": "Ana Recruiter",
        "sentAt": "2026-03-14T09:00:00.000Z",
        "text": "Hola, por favor envíame tu pasaporte.",
        "hasMedia": false,
        "mediaIds": []
      },
      {
        "id": "msg_2",
        "sequenceNo": 2,
        "senderRole": "CANDIDATE",
        "senderName": "Carlos Perez",
        "sentAt": "2026-03-14T09:05:00.000Z",
        "text": "Claro, te lo envío ahora.",
        "hasMedia": true,
        "mediaIds": ["media_1"]
      }
    ]
  },
  "media": [
    {
      "id": "media_1",
      "fileId": "file_1",
      "linkedMessageId": "msg_2",
      "mediaType": "IMAGE",
      "previewPath": "C:/appdata/previews/passport.jpg",
      "ocr": {
        "status": "COMPLETED",
        "engine": "TESSERACT",
        "text": "PASSPORT REPUBLIC OF CUBA ...",
        "confidence": 0.84
      },
      "classification": {
        "documentType": "PASSPORT",
        "confidence": 0.91,
        "status": "DETECTED"
      },
      "extractedFields": {
        "documentNumber": "AB123456",
        "expiryDate": "2028-01-01",
        "issuingCountry": "CUBA",
        "holderName": "CARLOS PEREZ"
      }
    }
  ],
  "candidateDraft": {
    "candidateId": null,
    "externalCandidateId": null,
    "fullName": "Carlos Perez",
    "firstName": "Carlos",
    "lastName": "Perez",
    "phone": "+48555111222",
    "email": null,
    "nationality": "Cuban",
    "countryOfResidence": "Poland",
    "dateOfBirth": null,
    "pesel": null,
    "passportNumber": "AB123456",
    "kartaPobytuNumber": null,
    "workPermitNumber": null,
    "preferredLanguage": "ES",
    "source": "WHATSAPP_IMPORTER",
    "sourceRef": "job_01HXYZ123ABC",
    "notes": "Interested in work opportunity in Poland."
  },
  "legalAssessment": {
    "status": "PARTIAL",
    "missingDocuments": ["KARTA_POBYTU", "WORK_PERMIT"],
    "documentStates": {
      "passport": "VALID_OR_PRESENT",
      "kartaPobytu": "MISSING",
      "workPermit": "MISSING",
      "pesel": "UNKNOWN"
    },
    "reviewNotes": "Passport detected. No karta pobytu detected. No work permit detected."
  },
  "templateSuggestions": [
    {
      "code": "LEGAL_DOCS_REQUEST_BASE",
      "language": "ES",
      "reason": "Candidate language is Spanish and legal docs are incomplete.",
      "priority": 1,
      "bodyPreview": "Hola, gracias. Aún necesitamos..."
    }
  ],
  "export": {
    "mode": "UPSERT",
    "csvReady": true,
    "csvValidation": {
      "isValid": true,
      "errors": [],
      "warnings": ["Email is missing."]
    },
    "mappingVersion": "hrappka-v1",
    "rowPreview": {
      "candidate_id": "",
      "full_name": "Carlos Perez",
      "phone": "+48555111222",
      "passport_number": "AB123456"
    }
  },
  "sync": {
    "googleSheets": {
      "enabled": false,
      "status": "NOT_CONNECTED",
      "lastAttemptAt": null
    },
    "hubApi": {
      "enabled": false,
      "status": "DISABLED",
      "lastAttemptAt": null
    }
  },
  "uiState": {
    "activeStep": "REVIEW",
    "selectedMediaId": "media_1",
    "selectedTemplateCode": "LEGAL_DOCS_REQUEST_BASE",
    "rightRailTab": "CANDIDATE",
    "hasUnsavedEdits": false
  },
  "audit": {
    "warnings": [
      {
        "code": "MISSING_EMAIL",
        "message": "No email detected in conversation or documents."
      }
    ],
    "events": [
      {
        "type": "JOB_CREATED",
        "timestamp": "2026-03-17T10:20:00.000Z"
      },
      {
        "type": "CHAT_PARSED",
        "timestamp": "2026-03-17T10:20:30.000Z"
      },
      {
        "type": "OCR_COMPLETED",
        "timestamp": "2026-03-17T10:21:20.000Z"
      }
    ]
  }
}
3) Job payload TypeScript interface draft

This makes implementation cleaner immediately.

export type ImportJobStatus =
  | "CREATED"
  | "PARSING"
  | "OCR_RUNNING"
  | "CLASSIFYING"
  | "EXTRACTING"
  | "REVIEW_READY"
  | "EXPORT_READY"
  | "EXPORTED"
  | "FAILED";

export type ParticipantRole = "RECRUITER" | "CANDIDATE" | "UNKNOWN";
export type JobLanguage = "ES" | "EN" | "PL" | "UNKNOWN";
export type MediaType = "IMAGE" | "PDF" | "OTHER";
export type LegalAssessmentStatus =
  | "COMPLETE"
  | "PARTIAL"
  | "MISSING_CRITICAL_DOCS"
  | "NEEDS_REVIEW"
  | "UNKNOWN";

export interface ImportJobPayload {
  jobId: string;
  version: string;
  status: ImportJobStatus;
  createdAt: string;
  updatedAt: string;
  source: JobSource;
  participants: JobParticipants;
  conversation: JobConversation;
  media: JobMedia[];
  candidateDraft: CandidateDraft;
  legalAssessment: LegalAssessment;
  templateSuggestions: TemplateSuggestion[];
  export: ExportState;
  sync: SyncState;
  uiState: ImporterUiState;
  audit: JobAudit;
}

You’d then split the rest into subtypes in packages/contracts.

4) Exact CSV field mapping draft

You said the target is HRappka-aligned with English snake_case keys.
So the CSV mapper should already be strict and versioned.

Mapping strategy

Use these rules:

system columns first

then candidate identity

then contact

then legal/document

then pipeline/status

then source/import metadata

then notes/recruiter data

That keeps exports predictable.

4.1 CSV draft columns — v1 core

This is a strong first release mapping.

candidate_id
external_candidate_id
full_name
first_name
last_name
gender
date_of_birth
phone
email
preferred_language
nationality
country_of_residence
pesel
passport_number
passport_issue_date
passport_expiry_date
passport_issuing_country
karta_pobytu_number
karta_pobytu_expiry_date
work_permit_number
work_permit_expiry_date
document_status_passport
document_status_karta_pobytu
document_status_work_permit
document_status_pesel
legal_status
missing_documents
pipeline_stage_code
pipeline_stage_label
assigned_recruiter_id
assigned_recruiter_name
team_id
team_name
source
source_ref
import_job_id
imported_conversation_id
conversation_language
conversation_summary
templates_suggested
last_message_at
last_document_detected_at
notes
created_at
updated_at
sync_target
sync_status
export_batch_id
validation_errors
validation_warnings

That is already enough for a serious MVP.

4.2 CSV mapping table
CSV column	Source in job payload	Notes
candidate_id	candidateDraft.candidateId	blank for new
external_candidate_id	candidateDraft.externalCandidateId	optional
full_name	candidateDraft.fullName	required
first_name	candidateDraft.firstName	optional
last_name	candidateDraft.lastName	optional
gender	candidateDraft.gender	optional
date_of_birth	candidateDraft.dateOfBirth	ISO or agreed format
phone	candidateDraft.phone	key for NEW detection if no candidate_id
email	candidateDraft.email	optional
preferred_language	candidateDraft.preferredLanguage	ES/EN/PL
nationality	candidateDraft.nationality	optional
country_of_residence	candidateDraft.countryOfResidence	optional
pesel	candidateDraft.pesel	optional
passport_number	candidateDraft.passportNumber	from extraction
passport_issue_date	media[].extractedFields.issueDate	first passport doc
passport_expiry_date	media[].extractedFields.expiryDate	first passport doc
passport_issuing_country	media[].extractedFields.issuingCountry	first passport doc
karta_pobytu_number	candidateDraft.kartaPobytuNumber	optional
karta_pobytu_expiry_date	matching document extraction	optional
work_permit_number	candidateDraft.workPermitNumber	optional
work_permit_expiry_date	matching document extraction	optional
document_status_passport	legalAssessment.documentStates.passport	normalized
document_status_karta_pobytu	legalAssessment.documentStates.kartaPobytu	normalized
document_status_work_permit	legalAssessment.documentStates.workPermit	normalized
document_status_pesel	legalAssessment.documentStates.pesel	normalized
legal_status	legalAssessment.status	COMPLETE/PARTIAL/etc.
missing_documents	`legalAssessment.missingDocuments.join("	")`
pipeline_stage_code	derived	e.g. DOCS_PENDING
pipeline_stage_label	derived	human-readable
assigned_recruiter_id	importer settings or manual	optional
assigned_recruiter_name	importer settings or manual	optional
team_id	importer settings or sync context	optional
team_name	importer settings or sync context	optional
source	candidateDraft.source	WHATSAPP_IMPORTER
source_ref	candidateDraft.sourceRef	job ref
import_job_id	jobId	required
imported_conversation_id	blank until hub sync	optional
conversation_language	conversation.languageDetected	required if detected
conversation_summary	conversation.summary	optional
templates_suggested	templateSuggestions[].code	pipe-separated
last_message_at	last conversation message timestamp	derived
last_document_detected_at	last classified media time	derived
notes	candidateDraft.notes	editable
created_at	createdAt	job created
updated_at	updatedAt	job updated
sync_target	export target	CSV/SHEETS/HUB
sync_status	export/sync state	PENDING/SUCCESS/FAILED
export_batch_id	generated at export time	trackable
validation_errors	export validation	pipe-separated
validation_warnings	export validation	pipe-separated
4.3 NEW vs UPDATE logic

This should be explicit.

UPDATE if

candidate_id exists

Else NEW if

candidate_id is blank

but phone exists

Else REVIEW_REQUIRED if

no candidate_id

no phone

This logic should appear in the UI as well.

if (candidate_id) return "UPDATE";
if (!candidate_id && phone) return "NEW";
return "REVIEW_REQUIRED";
5) Pipeline stage derivation draft

The importer should not just export raw data.
It should also derive a first pipeline stage suggestion.

Suggested rule set
NEW_CONTACT

chat exists

almost no candidate fields extracted

DOCS_PENDING

candidate identified

critical legal docs missing

DOCS_PARTIAL

at least one important doc present

one or more required docs missing

LEGAL_REVIEW

most key docs present

confidence low or inconsistencies detected

READY_FOR_ASSIGNMENT

candidate core fields present

required docs present

no major warnings

ON_HOLD

severe ambiguity or unreadable documents

REJECTED

manual only in Phase 2, not automatic

6) Exact DTO draft for upsert-from-import

This is the most important API contract between Importer and Hub.

6.1 DTO shape — request
export class UpsertFromImportDto {
  source!: "WHATSAPP_IMPORTER";
  jobId!: string;
  mappingVersion!: string;
  candidate!: UpsertImportedCandidateDto;
  documents!: UpsertImportedDocumentDto[];
  conversation!: UpsertImportedConversationDto;
  legalAssessment!: UpsertImportedLegalAssessmentDto;
  templateSuggestions?: UpsertImportedTemplateSuggestionDto[];
  exportContext?: UpsertImportedExportContextDto;
}
6.2 Candidate DTO
export class UpsertImportedCandidateDto {
  candidateId?: string | null;
  externalCandidateId?: string | null;
  fullName!: string;
  firstName?: string | null;
  lastName?: string | null;
  gender?: string | null;
  dateOfBirth?: string | null;
  phone?: string | null;
  email?: string | null;
  preferredLanguage?: "ES" | "EN" | "PL" | "UNKNOWN";
  nationality?: string | null;
  countryOfResidence?: string | null;
  pesel?: string | null;
  passportNumber?: string | null;
  kartaPobytuNumber?: string | null;
  workPermitNumber?: string | null;
  source!: string;
  sourceRef!: string;
  notes?: string | null;
  assignedRecruiterId?: string | null;
  teamId?: string | null;
}
6.3 Documents DTO
export class UpsertImportedDocumentDto {
  localMediaId?: string | null;
  documentType!:
    | "PASSPORT"
    | "KARTA_POBYTU"
    | "WORK_PERMIT"
    | "PESEL_CONFIRMATION"
    | "UNKNOWN";
  documentNumber?: string | null;
  issueDate?: string | null;
  expiryDate?: string | null;
  issuingCountry?: string | null;
  status?:
    | "DETECTED"
    | "VALID"
    | "PARTIAL"
    | "MISSING"
    | "EXPIRED"
    | "UNREADABLE"
    | "NEEDS_REVIEW";
  confidenceScore?: number | null;
  extractedText?: string | null;
  fileName?: string | null;
  mimeType?: string | null;
}
6.4 Conversation DTO
export class UpsertImportedConversationDto {
  sourceFileName?: string | null;
  languageDetected?: "ES" | "EN" | "PL" | "UNKNOWN";
  summary?: string | null;
  phoneDetected?: string | null;
  messages!: UpsertImportedMessageDto[];
  media!: UpsertImportedMediaDto[];
}
Message DTO
export class UpsertImportedMessageDto {
  sequenceNo!: number;
  senderRole!: "RECRUITER" | "CANDIDATE" | "UNKNOWN";
  senderName?: string | null;
  messageText?: string | null;
  sentAt?: string | null;
  hasMedia!: boolean;
  localMessageId?: string | null;
}
Media DTO
export class UpsertImportedMediaDto {
  localMediaId!: string;
  linkedMessageSequenceNo?: number | null;
  mediaType!: "IMAGE" | "PDF" | "OTHER";
  fileName!: string;
  mimeType?: string | null;
  ocrStatus?: string | null;
  classification?: string | null;
}
6.5 Legal assessment DTO
export class UpsertImportedLegalAssessmentDto {
  status!:
    | "COMPLETE"
    | "PARTIAL"
    | "MISSING_CRITICAL_DOCS"
    | "NEEDS_REVIEW"
    | "UNKNOWN";
  missingDocuments!: string[];
  documentStates!: {
    passport?: string;
    kartaPobytu?: string;
    workPermit?: string;
    pesel?: string;
  };
  reviewNotes?: string | null;
  derivedPipelineStageCode?:
    | "NEW_CONTACT"
    | "DOCS_PENDING"
    | "DOCS_PARTIAL"
    | "LEGAL_REVIEW"
    | "READY_FOR_ASSIGNMENT"
    | "ON_HOLD"
    | "REJECTED";
}
6.6 Template suggestion DTO
export class UpsertImportedTemplateSuggestionDto {
  code!: string;
  language!: "ES" | "EN" | "PL";
  reason?: string | null;
  priority?: number | null;
}
6.7 Export context DTO
export class UpsertImportedExportContextDto {
  mode!: "NEW" | "UPDATE" | "UPSERT";
  csvMappingVersion!: string;
  validationErrors?: string[];
  validationWarnings?: string[];
}
6.8 Example request payload
{
  "source": "WHATSAPP_IMPORTER",
  "jobId": "job_01HXYZ123ABC",
  "mappingVersion": "hrappka-v1",
  "candidate": {
    "candidateId": null,
    "externalCandidateId": null,
    "fullName": "Carlos Perez",
    "firstName": "Carlos",
    "lastName": "Perez",
    "phone": "+48555111222",
    "preferredLanguage": "ES",
    "nationality": "Cuban",
    "passportNumber": "AB123456",
    "source": "WHATSAPP_IMPORTER",
    "sourceRef": "job_01HXYZ123ABC",
    "notes": "Candidate interested in work in Poland."
  },
  "documents": [
    {
      "localMediaId": "media_1",
      "documentType": "PASSPORT",
      "documentNumber": "AB123456",
      "expiryDate": "2028-01-01",
      "issuingCountry": "CUBA",
      "status": "VALID",
      "confidenceScore": 0.91,
      "fileName": "passport.jpg",
      "mimeType": "image/jpeg"
    }
  ],
  "conversation": {
    "sourceFileName": "chat.txt",
    "languageDetected": "ES",
    "summary": "Candidate sent passport and asked about work permit.",
    "phoneDetected": "+48555111222",
    "messages": [
      {
        "sequenceNo": 1,
        "senderRole": "RECRUITER",
        "senderName": "Ana Recruiter",
        "messageText": "Hola, por favor envíame tu pasaporte.",
        "sentAt": "2026-03-14T09:00:00.000Z",
        "hasMedia": false
      }
    ],
    "media": [
      {
        "localMediaId": "media_1",
        "linkedMessageSequenceNo": 2,
        "mediaType": "IMAGE",
        "fileName": "passport.jpg",
        "mimeType": "image/jpeg",
        "ocrStatus": "COMPLETED",
        "classification": "PASSPORT"
      }
    ]
  },
  "legalAssessment": {
    "status": "PARTIAL",
    "missingDocuments": ["KARTA_POBYTU", "WORK_PERMIT"],
    "documentStates": {
      "passport": "VALID",
      "kartaPobytu": "MISSING",
      "workPermit": "MISSING",
      "pesel": "UNKNOWN"
    },
    "reviewNotes": "Passport detected. Missing residence card and work permit.",
    "derivedPipelineStageCode": "DOCS_PARTIAL"
  },
  "templateSuggestions": [
    {
      "code": "LEGAL_DOCS_REQUEST_BASE",
      "language": "ES",
      "reason": "Missing legal documents",
      "priority": 1
    }
  ],
  "exportContext": {
    "mode": "UPSERT",
    "csvMappingVersion": "hrappka-v1",
    "validationErrors": [],
    "validationWarnings": ["Missing email"]
  }
}
7) Example response DTO

The Hub should answer clearly so the Importer can show a clean sync result.

export class UpsertFromImportResponseDto {
  result!: "CREATED" | "UPDATED" | "REVIEW_REQUIRED";
  candidateId!: string;
  conversationId!: string;
  pipelineStageCode?: string;
  warnings!: string[];
  linkedDocuments!: {
    documentId: string;
    documentType: string;
  }[];
}
Example response
{
  "result": "CREATED",
  "candidateId": "cand_123",
  "conversationId": "conv_987",
  "pipelineStageCode": "DOCS_PARTIAL",
  "warnings": ["Email missing. Candidate created without email."],
  "linkedDocuments": [
    {
      "documentId": "doc_1",
      "documentType": "PASSPORT"
    }
  ]
}
8) Validation rules for Phase 2.1

These should be enforced both in UI and backend.

Required to export CSV

full_name present

at least one of:

candidate_id

phone

Required to sync to Hub

fullName present

source present

sourceRef present

jobId present

Warning-only, not blocking

missing email

missing nationality

missing date of birth

low OCR confidence

unknown document type

no recruiter assigned

Hard blockers

no chat file found

parse failed completely

corrupted export row

invalid mapping version

invalid date format after normalization

9) Recommended file ownership in the repo

This is how I’d place the Phase 2.1 implementation pieces.

Contracts

packages/contracts/src/importer/job-payload.ts

packages/contracts/src/importer/export-row.ts

packages/contracts/src/api/upsert-from-import.dto.ts

Importer UI

apps/importer-desktop/src/pages/review/ReviewPage.tsx

apps/importer-desktop/src/features/candidate-extraction/*

apps/importer-desktop/src/features/csv-export/*

API

apps/hub-api/src/modules/candidates/dto/upsert-from-import.dto.ts

apps/hub-api/src/modules/candidates/candidates.controller.ts

apps/hub-api/src/modules/candidates/candidates.service.ts

10) Exact next implementation order from here

This is the smartest next build sequence.

Next 7 moves

create ImportJobPayload contract

implement Review screen shell around that contract

implement CSV row mapper from payload

implement export validation

implement UpsertFromImportDto in API

implement POST /api/candidates/upsert-from-import

wire Export screen for CSV first, Hub sync second

That gets you from “good planning” to actual forward motion.

11) My blunt recommendation

The single most important discipline now is this:

Do not let the UI invent data shapes.
The payload contract must drive:

review screen

export screen

sync screen

DB persistence

API request

That will save you a lot of pain later.




