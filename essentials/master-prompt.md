ORI-CRUIT + ORI-CRUIT-WHATSAPP-IMPORTER
Full UI Adaptation + Technical Product Brief for Antigravity
1. Product reality: what we are building

This is not just a pretty HR dashboard.

This is a recruitment operations ecosystem with two tightly connected products:

A. ORI-CRUIT

The main recruitment operations hub for Folga and similar staffing teams.

It manages:

candidate records

recruiter ownership

pipeline stages

legal document tracking

WhatsApp-derived conversation history

multilingual message templates

HRappka-aligned export/import logic

recruiter/team workflows

legal readiness and assignment readiness

B. ORI-CRUIT-WHATSAPP-IMPORTER

The intake tool that transforms messy WhatsApp exports into structured recruiter-ready data.

It handles:

importing WhatsApp .txt chats

importing images/PDFs

parsing conversation structure

OCR on legal docs

document classification

extracting candidate fields

suggesting templates/actions

exporting CSV / syncing to Google Sheets / syncing to ORI-CRUIT

Strategic relationship

The Importer is the entry gateway.
ORI-CRUIT is the system of record and workflow hub.

So the ecosystem flow is:

WhatsApp export + files → Importer → structured data → ORI-CRUIT Hub → HRappka / Excel / team workflows

2. Target deployment reality

This product family must be designed from day one for three delivery modes.

ORI-CRUIT

Primary:

browser-based web app

Secondary:

desktop wrapper via Tauri

Future:

mobile companion or mobile review shell

ORI-CRUIT-WHATSAPP-IMPORTER

Primary:

downloadable Windows portable .exe

Secondary:

browser-based version for remote access

Future:

macOS app package

This means the UI must be:

responsive but not mobile-first

desktop-optimized

keyboard-friendly

panel-based

modular

deployable in both web and desktop shells

3. The design interpretation of the inspiration

The uploaded inspiration is not “just minimalist.”
It is a very specific system.

What the inspiration is actually doing

It combines:

editorial poster composition

oversized condensed typography

Swiss grid logic

black/off-white contrast

soft pastel atmospheric gradients

sparse line-based technical graphics

modular panel segmentation

restrained premium motion

abstract but disciplined visual storytelling

What must be preserved

Antigravity must preserve these four things above all else:

1. Preserve the composition logic

Large modular blocks

asymmetric layouts

editorial section tension

black hero slabs and white content fields

meaningful negative space

oversized headlines against compact metadata

2. Preserve the typography hierarchy

Huge ultra-condensed uppercase display type

clean grotesk UI type for interface text

technical small copy for labels, timestamps, metadata

3. Preserve the motion personality

slow

deliberate

architectural

cinematic

restrained

premium

not playful, not bouncy

4. Preserve the palette behavior

warm off-white field

deep black emphasis

muted gray linework

blush pink / pale lime / soft beige gradients

gradients used as atmospheric accents, not loud decoration

What must change

The semantic layer must shift from crypto/security into:

recruitment

staffing

document verification

candidate readiness

multilingual recruiter communication

pipeline movement

HR data integrity

intake and review workflows

4. Hard visual rules

These are non-negotiable.

Global rules

0 border radius on all UI elements

no rounded buttons

no rounded cards

no rounded inputs

no rounded chips

no rounded tables

no rounded drawers

no rounded modals

no glassmorphism

no generic SaaS blue

no cartoon HR illustrations

no stock corporate people art

no soft startup dashboard clichés

Allowed exceptions

Only decorative brand objects may remain curved/organic:

orbital rings

radial gradient clouds

abstract wires/paths

diagram arcs

floating geometric sculptures

That gives you:
hard industrial UI + soft atmospheric brand objects

That contrast is the magic.

5. Product scope and behavior
A. ORI-CRUIT functional scope
Main jobs

ORI-CRUIT must let recruiters and team leads:

create and manage candidate records

review imported WhatsApp conversations

see legal document status

track missing docs

assign pipeline stages

trigger or copy message templates in ES/EN/PL

export candidate data to HRappka-compatible CSV

review candidate readiness

see team activity and ownership

filter by legal status, country, recruiter, stage, doc completeness

Core modules

Dashboard

Candidates

Candidate Detail

Imported Conversations

Documents Review

Templates

Pipeline Board

Recruiters/Teams

Exports / Integrations

Settings / Field Mapping / Label Mapping

Key entity model

Candidate

CandidateDocument

ImportedConversation

ImportedMessage

ImportedMedia

MessageTemplate

LegalReview

PipelineStage

Recruiter

Team

ExportJob

IntegrationSync

B. ORI-CRUIT-WHATSAPP-IMPORTER functional scope
Main jobs

The Importer must let a recruiter:

drag-and-drop WhatsApp export .txt

drag images and PDFs

reconstruct chat in readable form

detect candidate / recruiter message separation

OCR passport / karta pobytu / permit docs

classify documents

extract structured candidate data

detect probable missing fields

suggest legal-status level

suggest follow-up templates by candidate language

export clean CSV

sync to Sheets

optionally push to ORI-CRUIT API

Core workflow
Step 1: Import

drag files

see file list

validate file types

detect chat participants

detect media count

Step 2: Review

chat panel

document classification panel

extracted fields panel

template suggestion panel

warnings/errors panel

confidence indicators

Step 3: Export

export CSV

sync to Google Sheets

push to ORI-CRUIT

choose NEW vs UPDATE logic

show success/failure status

6. Technical architecture to build against
ORI-CRUIT Hub
Frontend

React + Vite

TailwindCSS

shadcn/ui only as primitive base, then heavily restyled

Framer Motion for page/section transitions

TanStack Table for data tables

TanStack Query for server state

React Router or app routing pattern depending scaffold

Zod for validation

React Hook Form for structured form handling

Backend

NestJS

Prisma

PostgreSQL

JWT auth

RBAC for recruiter / lead / admin

file storage for imported media

import audit trail

template engine

integration jobs

Deployment

Frontend: Vercel / Netlify / static hosting

API: Render / Railway / VPS

DB: PostgreSQL managed or self-hosted

media storage: S3-compatible or local during MVP

ORI-CRUIT-WHATSAPP-IMPORTER
Frontend shell

Tauri

React

TailwindCSS

Framer Motion

local state + persisted job history

local SQLite or lightweight store

Processing layer

Rust-side file handling for performance

OCR pipeline

chat parsing

metadata extraction

export generation

API connector module

OCR / parsing

Tesseract.js acceptable for v1

optional Rust OCR bindings later

classification rules via heuristics + keyword extraction

confidence scoring per field and document

Export layer

CSV generator

Google Sheets OAuth sync

future ORI-CRUIT REST connector

Packaging

Windows portable .exe

simple folder distribution

optional installer later

app must run without Node or technical setup

7. Release goal and readiness targets
Ready for browser

ORI-CRUIT web app must have:

auth

dashboard shell

candidate list

candidate detail

imported conversation review

template center

legal status summary

export-ready data views

Ready for desktop

Importer desktop app must have:

drag-and-drop working

file handling stable

chat rendering working

OCR basic but stable

CSV export 100% reliable

Sheets sync functioning

polished visual shell

readable errors and recovery

Ready for portable .exe

Importer must:

launch cleanly

not require terminal

not require admin

not require Node

include local assets

preserve settings locally

recover from bad imports gracefully

8. Exact design tokens

These tokens should be implemented globally and shared by both products.

Color tokens
Base

bg.base = #ECE9E4

bg.soft = #F3F0EB

bg.panel = #E7E2DC

bg.paper = #F7F4EF

Ink

ink.primary = #0A0A0A

ink.secondary = #3B3835

ink.muted = #6F6A65

ink.inverse = #F5F2ED

Lines / structure

line.hair = #C9C2BB

line.soft = #D8D1CA

line.strong = #0A0A0A

Accent fields

accent.blush = #F3C9D7

accent.rose = #E7B6C7

accent.lime = #DDE8B7

accent.beige = #E5D3C1

accent.mist = #EDE7E1

Semantic states

Do not use loud default SaaS colors. Keep them muted and brand-consistent.

state.success = #C8D7AE

state.warning = #E7D6A8

state.error = #D8B4B4

state.info = #D7D1EA

Black slab

surface.black = #050505

Gradient recipes

Use soft radial gradients only.

Gradient A

blush → lime → transparent

Gradient B

rose → beige → transparent

Gradient C

lime → blush → off-white

Opacity should stay low.
Blur should feel airbrushed, not glossy.

Typography tokens
Display family

Use a very condensed bold sans.
Examples to emulate:

Druk Condensed

Anton Condensed style

Monument Extended Condensed vibe

Bebas Neue is acceptable only as placeholder, not ideal

UI family

Use a clean grotesk / Swiss sans:

Inter

Suisse Intl style

General Sans

Neue Haas Grotesk-inspired option

Optional technical family

For IDs / timestamps / codes:

JetBrains Mono

IBM Plex Mono

Geist Mono

Sizes
Display

display.hero = 112/0.9

display.section = 88/0.92

display.block = 64/0.95

display.metric = 72/0.9

Headings

h1 = 56/1.0

h2 = 40/1.02

h3 = 28/1.08

h4 = 22/1.1

Interface

ui.lg = 18/1.35

ui.md = 16/1.4

ui.sm = 14/1.4

ui.xs = 12/1.35

ui.meta = 11/1.3

Tracking

Display: tight or slightly negative

UI: neutral

Metadata: slight positive tracking if uppercase

Typography rules

hero copy can be uppercase

data tables stay sentence case

legal statuses may use uppercase tags

small labels should feel technical, not decorative

Spacing tokens

Use a rigid spacing system.

space.4 = 4

space.8 = 8

space.12 = 12

space.16 = 16

space.20 = 20

space.24 = 24

space.32 = 32

space.40 = 40

space.48 = 48

space.64 = 64

space.80 = 80

space.96 = 96

space.120 = 120

Section rhythm

Large sections: 96–120 top/bottom

Product panels: 32–48 internal padding

Table panels: 20–24 internal padding

Border / edge tokens

radius.none = 0

border.hair = 1px solid var(--line-hair)

border.strong = 1px solid var(--ink-primary)

divider = 1px

Shadow policy

Prefer almost no shadow.
Use structure through:

contrast

borders

layering

spacing

black slabs

If needed:

extremely soft ambient shadow only on floating overlays

Motion tokens
Timing

motion.fast = 180ms

motion.base = 280ms

motion.slow = 520ms

motion.hero = 900ms

Easing

ease.out = cubic-bezier(0.22, 1, 0.36, 1)

ease.inout = cubic-bezier(0.76, 0, 0.24, 1)

Motion rule

No bounce. Ever.

9. Shared layout grammar

Both products must feel like the same company built them.

Shared structure

hard-edge shell

top navigation or top command strip

modular content fields

editorial oversized headings

black statement panels

technical metadata rails

asymmetrical content distribution

brand objects floating behind or beside content blocks

Shared section logic

Every major page should combine:

a dominant headline field

a technical secondary field

a utility action field

one hero black slab or structural contrast panel

one abstract decorative element or diagram area

10. ORI-CRUIT page-by-page layout rules
10.1 Marketing / Landing page
Purpose

Sell the product as a premium recruitment operations system.

Layout
Hero

giant display headline

one short operational sentence

two CTAs

black statement slab on one side or below

abstract recruitment/legal object on opposite side

thin metadata line

Sections after hero

Candidate Pipeline Intelligence

Legal Readiness + Document Verification

WhatsApp Ingestion

Multilingual Template Workflows

HRappka Alignment / Export

Team Operations / Recruiter Ownership

Integration and CTA close

Hero example structure

Left:

“RECRUITMENT MEETS CONTROL.”
Right:

short explainer

CTA bar

small metadata labels

Below:

black visual slab with product statement and abstract moving object

10.2 App shell
Layout

top bar, not rounded

optional left rail

main content canvas

right utility rail on detail-heavy pages

black/white contrast zones

very strong page heading hierarchy

Top bar

Contains:

logo

section switcher

global search

notifications

quick export

user/team switch

Keep it thin and disciplined.

10.3 Dashboard
Purpose

Show the operating state of recruitment.

Layout

Top:

oversized heading

date/team metadata

quick action group

Middle:

4–6 metric slabs

one large pipeline panel

one legal readiness panel

one recruiter activity feed

one imports panel

Bottom:

candidate movement

alerts/errors

export jobs / sync status

Visual rules

big numerals

black metric slabs

sharp table blocks

minimal chart clutter

use bars/lines/lanes, not playful donuts

10.4 Candidates list page
Layout

Top:

giant title + candidate count

filter strip

bulk action strip

Main:

large hard-edge table

side summary panel optional

status indicators inline

Columns

candidate name

phone

nationality

recruiter

pipeline stage

document completeness

legal status

last interaction

source

actions

Behavior

bulk update

export selected

open candidate detail

sort and filter fast

10.5 Candidate detail page
Purpose

This should feel like an editorial technical dossier.

Layout

Left column:

candidate identity block

stage

recruiter ownership

quick actions

Center:

document summary

conversation summary

timeline

extracted fields

Right:

legal review

missing documents

suggested templates

export/update actions

Visual behavior

use split fields and hard dividers

not soft CRM cards

statuses should feel like technical inspection states

10.6 Imported conversations page
Layout

Top:

title + import volume

filters

Main:

import jobs table

expandable detail preview

confidence scores

source file count

sync state

Detail drawer/panel

conversation metadata

linked candidate

extracted entities

unresolved issues

10.7 Documents review page
Purpose

A legal/verification command board.

Layout

doc queue

classification panel

confidence meter

missing fields

human override actions

Key status buckets

complete

partial

unreadable

invalid

duplicate

expired

needs review

10.8 Templates page
Layout

Top:

headline

language toggles

template category tabs

Main:

template list

live preview panel

variables/merge field panel

copy/send actions

Categories

initial outreach

legal docs request

follow-up

missing info

assignment-ready

rejection / pause

10.9 Pipeline board
Layout

giant stage title row

horizontal stage lanes or vertical structured board

hard-edge candidate tiles

legal status visible on each tile

recruiter visible

document alerts visible

Rule

Make it look structural and premium, not Trello-lite.

10.10 Integrations / Export page
Layout

HRappka export panel

Google Sheets sync status

API connector state

export history

field mapping view

11. ORI-CRUIT-WHATSAPP-IMPORTER page-by-page layout rules
11.1 Launch / Home / Empty state
Purpose

The app must explain itself in 5 seconds.

Layout

Left:

giant condensed title

one-liner explanation

accepted file types

action hints

Center:

drag area

abstract brand object or line graphic

Right:

quick “How it works” steps

sample output summary

Message

This page should scream:
drop your WhatsApp export here and we’ll structure everything

11.2 Import processing page
Layout

Top:

job title

file count

parse progress

stage indicator

Main:

uploaded files list

participant detection

parsing events

document scan progress

warnings

Motion

Sequential staged reveal as tasks complete.

11.3 Review page

This is the core page.

Layout: 3-column desktop shell
Left column

job metadata

file inventory

participant mapping

language detection

import status

re-run actions

Center column

reconstructed conversation

timestamped message blocks

media previews inline or expandable

recruiter vs candidate distinction

Right column

extracted candidate fields

documents detected

legal status

missing fields

suggested templates

export controls

Chat rules

Do not clone WhatsApp 1:1.
Instead:

use sharp-edge message blocks

subtle tonal separation

preserved timestamps

visible sender roles

media attachments as structured panels

The chat should feel brand-native.

11.4 Document analysis page / mode
Layout

document gallery strip

selected preview

OCR text output

classification result

extracted legal fields

confidence markers

override/edit actions

11.5 Export page
Layout

Top:

export result summary

NEW vs UPDATE counts

warnings

Main:

CSV preview

Sheets sync panel

ORI-CRUIT sync panel

save/export buttons

copy path / open file options

Success behavior

Show very clear success states, no ambiguity.

11.6 Settings page
Layout

language defaults

field label mapping

export defaults

Sheets auth

API toggle

template file management

local storage path

12. Component specifications

These specs apply across both products.

Buttons

zero radius

high contrast

44px min height

text weight medium/semibold

strong hover with background inversion or arrow motion

primary buttons often black or blush depending surface

no bubbly button feel

Inputs

zero radius

thin border

no inner shadow

large enough padding

labels outside input preferred

placeholder subdued

Tags / chips

zero radius

1px border

technical style

uppercase allowed for statuses

muted fills or outline style

Cards / panels

zero radius

1px border or black slab

large padding

no shadow unless overlay

use background contrast instead of ornament

Tables

hard-edge rows

minimal zebra if any

clear line separators

strong header hierarchy

inline actions appear on hover or right edge

status columns use subtle coded blocks

Navigation

top nav or side nav with hard edges

active state via fill or underline line, not pill softness

minimal icon use

typography-led navigation

Drawers / modals

zero radius

flat structural surfaces

appear through slide/fade

no glass blur unless extremely subtle brand choice

close behavior should be clean and immediate

Timeline

thin rule lines

square markers or very subtle geometric markers

timestamp + action + actor

used in candidate history and import jobs

Progress / confidence indicators

linear bars preferred

use muted fills

no candy-colored spinners

Empty states

must feel premium

use oversized headline + abstract brand object + concise operational guidance

13. Motion system for both products
Shared motion personality

premium

measured

precise

architectural

quiet confidence

Global motion behaviors
Page entry

section fade + upward translate 16–24px

staggered child reveal

hero text mask reveal

Hover

slight translateY or icon shift

mild contrast inversion

no bounce

no dramatic scaling

Panels

slide/fade in

280–520ms

black slabs can reveal slightly slower

Decorative elements

slow drift

subtle orbital rotation

low amplitude movement

very low frequency

Diagram motion

line draw

path reveal

orbit trace

staged metric count

Importer-specific motion

progress states appear stepwise

extraction results reveal sequentially

success state should feel crisp and satisfying, not celebratory toy-like

14. UX rules by product
ORI-CRUIT UX principles

command center clarity

legal confidence visibility

operational density without clutter

quick stage and status recognition

fast filtering and review

strong detail pages

Importer UX principles

dead-simple entry

obvious drag-and-drop

readable review mode

extremely clear export outcome

confidence and warnings shown without fear-inducing complexity

15. Build guidance for Antigravity

Antigravity should not merely generate screens.
It should build a coherent product system.

Antigravity must deliver:
For ORI-CRUIT

marketing landing page

authenticated app shell

dashboard

candidates list

candidate detail

imported conversations view

documents review

templates center

pipeline board

integrations/export page

settings

For Importer

app home / drag state

processing state

review state

document analysis state

export state

settings

error/empty/success states

It must also deliver

unified token system

global styles

motion primitives

reusable components

responsive desktop-first behavior

production-ready folder structure

visual parity across products

16. Ask Antigravity to design and implement toward actual release

Here is the important product instruction:

Antigravity must build this with real release intent, not “concept mode.”

That means:

pages must connect logically

states must exist

components must be reusable

tables/forms/review flows must be real

desktop shell must be valid for Tauri

browser shell must be valid for deployment

portable executable workflow must be respected

no fake placeholder-only UX

17. Final master prompt for Antigravity

Use this as the main prompt.

Build the ORI-CRUIT ecosystem as a production-minded product system composed of two connected applications:

1. ORI-CRUIT
A recruitment operations hub for staffing teams that manage candidate pipelines, legal document verification, multilingual recruiter messaging templates, HRappka-aligned field mapping, recruiter ownership, and export workflows.

2. ORI-CRUIT-WHATSAPP-IMPORTER
A WhatsApp intake tool that accepts manually exported WhatsApp .txt chats plus attached images/PDFs, reconstructs the conversation, performs OCR and document classification, extracts candidate data, suggests templates/actions, and exports to CSV / Google Sheets / ORI-CRUIT.

The design must adapt the uploaded inspiration with extremely high fidelity to its visual language while translating the domain semantics into recruitment and legal operations.

Preserve these four things above all else:
1. Preserve the composition logic
2. Preserve the typography hierarchy
3. Preserve the motion personality
4. Preserve the palette behavior

VISUAL SYSTEM TO PRESERVE:
- editorial Swiss/brutalist composition
- modular asymmetric layout
- oversized ultra-condensed display typography
- neutral grotesk UI typography
- warm off-white backgrounds
- deep black contrast slabs
- sparse pastel radial gradients in blush pink, pale lime, and beige
- line-based technical graphics
- disciplined negative space
- restrained premium motion
- architectural pacing
- strong black/white contrast
- abstract branded objects and diagrams

MANDATORY HARD RULES:
- 0 border radius on all UI components
- buttons, cards, chips, tabs, tables, inputs, drawers, modals, nav items, and panels must all have sharp corners
- no rounded UI elements
- no glassmorphism
- no generic SaaS blue palette
- no playful corporate HR illustrations
- no soft startup dashboard clichés
- only decorative brand objects may remain curved or organic

SHARED DESIGN TOKENS:
Colors:
- bg.base #ECE9E4
- bg.soft #F3F0EB
- bg.panel #E7E2DC
- bg.paper #F7F4EF
- ink.primary #0A0A0A
- ink.secondary #3B3835
- ink.muted #6F6A65
- ink.inverse #F5F2ED
- line.hair #C9C2BB
- line.soft #D8D1CA
- accent.blush #F3C9D7
- accent.rose #E7B6C7
- accent.lime #DDE8B7
- accent.beige #E5D3C1
- surface.black #050505

Typography:
- Display: ultra-condensed, bold, uppercase-capable, poster-like
- UI: Swiss/neo-grotesk sans
- Meta: optional mono for timestamps / IDs / status codes

Sizing:
- Hero display scale must be very large
- Section headings must remain oversized and confident
- Interface text must remain clean, readable, and restrained

Motion:
- no bounce
- no cartoon easing
- use fade/slide reveals, mask reveals, line/path draws, slow object drift, subtle orbital motion
- premium architectural motion only

PRODUCT REQUIREMENTS:
ORI-CRUIT must include:
- marketing landing page
- dashboard
- candidates list
- candidate detail
- imported conversations page
- document review page
- templates center
- pipeline board
- integrations/export page
- settings

ORI-CRUIT-WHATSAPP-IMPORTER must include:
- launch / drag-and-drop page
- processing page
- review page
- document analysis page
- export page
- settings page
- empty / loading / warning / success / error states

FUNCTIONAL REQUIREMENTS:
ORI-CRUIT:
- candidate records
- pipeline stages
- legal document tracking
- imported conversation history
- recruiter/team ownership
- multilingual message templates (ES/EN/PL)
- export and sync surfaces
- legal readiness and missing-doc visibility

ORI-CRUIT-WHATSAPP-IMPORTER:
- import WhatsApp .txt + images/PDFs
- chat reconstruction
- OCR document reading
- document classification (passport, karta pobytu, permit, etc.)
- extracted candidate fields
- confidence and missing-field warnings
- suggested templates by candidate language
- CSV export
- Google Sheets sync
- future ORI-CRUIT API sync surface

PAGE-BY-PAGE RULES:

ORI-CRUIT landing page:
- huge editorial hero
- one black statement slab
- modular product sections for pipeline, legal review, WhatsApp ingestion, templates, export, and team operations
- same visual mood as inspiration but semantically recruitment-focused

ORI-CRUIT app shell:
- premium dashboard shell
- hard-edge panels
- giant headings
- strong filters and table systems
- candidate detail must feel like an editorial technical dossier, not a generic CRM page

ORI-CRUIT importer:
- 3-column review layout
- left rail for job/file metadata
- center conversation reconstruction
- right panel for extracted fields, legal status, suggestions, and export actions
- chat must not copy WhatsApp directly; reinterpret it through the ORI-CRUIT design language

COMPONENT SPECS:
- zero-radius buttons
- zero-radius inputs
- zero-radius cards and panels
- thin structural borders
- black emphasis surfaces
- clean hard-edge tables
- minimal shadows
- status tags must be technical and restrained
- strong data hierarchy
- empty states must still feel premium and intentional

TECHNICAL BUILD INTENT:
This is not a visual concept only. Build reusable components and page structure that can realistically support:
- browser deployment for ORI-CRUIT
- Tauri desktop shell for ORI-CRUIT-WHATSAPP-IMPORTER
- portable Windows .exe distribution
- future API connection between Importer and Hub

STACK ASSUMPTIONS:
ORI-CRUIT:
- React + Vite + Tailwind + Framer Motion
- NestJS + Prisma + PostgreSQL
- JWT auth
- export and integration surfaces

ORI-CRUIT-WHATSAPP-IMPORTER:
- Tauri + React + Tailwind + Framer Motion
- Rust-side file handling
- OCR/document processing layer
- local persistence / lightweight database
- CSV / Sheets / API export surfaces

OUTPUT:
- full design system
- exact design tokens
- reusable components
- page-by-page layouts
- motion specs
- real product states
- production-minded structure
- visually unified ecosystem
- beautiful, intuitive, zero-learning-curve execution
18. My strong recommendation

The best way to get a killer result is to make Antigravity build in this order:

Order of execution

Global token system

Shared shell + component primitives

ORI-CRUIT marketing + dashboard

Candidate detail + pipeline + document review

Importer drag / review / export flow

Motion pass

Production cleanup for browser + Tauri

That sequence will keep the system consistent instead of producing random pretty screens.