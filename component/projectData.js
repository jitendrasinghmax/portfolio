export default [{
  title: "How to Build a Vercel-Like Deployment System",
  description: "A system that redeploys an application automatically on every GitHub push event by building a Docker image and shipping it to a server (EC2).",
  src:"/vercelArchitecher.png",
  items: [
    {
      
      title: "Define Product Behaviour",
      description: "Understand the exact purpose of the system.",
      items: [
        { title: "User pastes GitHub repo URL" },
        { title: "System listens for push events" },
        { title: "On each push → build Docker image" },
        { title: "Push image to DockerHub" },
        { title: "SSH to EC2 and redeploy app" }
      ]
    },
    {
      
      title: "Build the Frontend UI",
      description: "Create a simple UI for users to register repositories.",
      items: [
        { title: "Input field to paste GitHub repo URL" },
        { title: "Option to select branch" },
        { title: "Fields for DockerHub credentials" },
        { title: "Fields for EC2 SSH credentials" }
      ]
    },
    {
      
      title: "Integrate GitHub OAuth",
      description: "Connect the user's GitHub so your system can add workflows or webhooks.",
      items: [
        { title: "GitHub OAuth app" },
        { title: "Repo access permission" },
        { title: "Ability to commit workflow file" },
        { title: "Ability to read push events" }
      ]
    },
    {
      
      title: "Add Deployment Workflow to Repo",
      description: "Automatically inject a GitHub Actions workflow into the user's repo.",
      items: [
        { title: "Trigger on push" },
        { title: "Checkout repo" },
        { title: "Setup build environment" },
        { title: "Build Docker image" },
        { title: "Tag image with commit SHA" },
        { title: "Push image to DockerHub" },
        { title: "SSH into EC2" },
        { title: "Pull image" },
        { title: "Stop old container" },
        { title: "Start new container" }
      ]
    },
    {
      
      title: "Workflow Execution Steps",
      description: "Breakdown of what GitHub Actions does in detail.",
      items: [
        { title: "Create Temporary Linux Environment",desc: "Github Actions automatically creates a fresh Ubuntu VM for the build." },
        { title: "Login to DockerHub", desc: "Use secrets (DOCKERHUB_USERNAME, DOCKERHUB_TOKEN) to authenticate." },
        { title: "Build Docker Image", desc: "Build an image using the latest commit code (HEAD)." },
        { title: "Tag Image with Commit SHA", desc: "Do not use 'latest'. Use something like `repo:sha-<GIT_SHA>`." },
        { title: "Push Image to DockerHub", desc: "Push the tagged image to DockerHub for deployment." },
        { title: "SSH Into EC2", desc: "Use SSH private key stored as GitHub secret to connect." },
        { title: "Pull the New Image", desc: "Pull the newly tagged image from DockerHub." },
        { title: "Stop Old Container", desc: "Gracefully stop the running container without killing active sessions abruptly." },
        { title: "Redeploy the New Image", desc: "Run a new container using the updated image while preserving environment variables." }
      ]
    },
    {
      
      title: "EC2 Deployment Script",
      description: "The commands executed on the EC2 server.",
      items: [
        { title: "docker pull <IMAGE_TAG>" },
        { title: "docker stop <OLD_CONTAINER>" },
        { title: "docker rm <OLD_CONTAINER>" },
        { title: "docker run -d --name app -p 80:80 <IMAGE_TAG>" }
      ]
    },
    {
      
      title: "Store and Manage Secrets",
      description: "You need secrets at two levels.",
      items:[{
        title:"github",
        items: [
          { title: "DOCKERHUB_USERNAME" },
          { title: "DOCKERHUB_TOKEN" },
          { title: "EC2_SSH_PRIVATE_KEY" },
          { title: "EC2_HOST" },
          { title: "EC2_USER" }
        ]
      },
      {
        title:"server",
        items: [
          { title: "Environment variables required by the user's app" },
          { title: "Database URLs" },
          { title: "API Keys" }
        ]
      }
      ]
    },
    {
      
      title: "Automatic Redeployment Logic",
      description: "How the system decides when to redeploy.",
      items: [
        { title: "GitHub detects push" },
        { title: "Runs deploy workflow" },
        { title: "Build & push new Docker image" },
        { title: "SSH to EC2" },
        { title: "Redeploy" }
      ]
    },
    {
      
      title: "Add Rollback Support",
      description: "Allow users to return to a previous working version.",
      items: [
        { title: "Always keep previous image tag" },
        { title: "On failure → pull previous image" },
        { title: "Re-run container using old version" }
      ]
    },
    {
      title: "Monitoring & Logs",
      description: "Show deployment logs to the user.",
      items: [
        { title: "GitHub Actions build logs" },
        { title: "EC2 SSH command logs" },
        { title: "Container logs" }
      ]
    }
  ]
},
{
  title: "How to Build a Platform Like Lovable.ai",
  description: "A text-to-app, AI-first developer platform that turns natural language prompts into full-stack applications (UI, backend, DB, deploy) while keeping editable, production-ready code and previews.",
  src: "/lovableArchitecture.png",
  items: [

    {
      title: "Product Vision & Core Capabilities",
      description: "Define the unique value: natural-language app generation, editable code output, integrated backend, previews, and one-click deploy.",
      items: [
        { title: "Natural-language prompt → working app (UI + backend + DB)" },
        { title: "Editable source code synced to a repo (developers keep control)" },
        { title: "Built-in backend (auth, DB, storage) and hosting (Lovable Cloud style)" },
        { title: "Preview environments and live preview that syncs with code" },
        { title: "Teams, roles, billing, and enterprise controls" }
      ]
    },

    {
      title: "User Onboarding & UX",
      description: "Simple conversational flow that turns idea → prototype → app with minimal friction.",
      items: [
        { title: "Chat-first builder (ask, iterate, refine with follow-up prompts)" },
        { title: "Wizard to choose templates, data model, and auth" },
        { title: "Automatic scaffolding: routes, pages, DB schemas" },
        { title: "In-app editor showing generated code beside live preview" },
        { title: "Export / Git sync: push generated project to GitHub" }
      ]
    },

    {
      title: "AI Brain: Planner + Code Generator",
      description: "Modular AI stack that plans tasks, generates code, and runs validation/cleanup steps.",
      items: [
        { title: "High-level planner (reads prompt, breaks into tasks: UI, DB, API)" },
        { title: "Code generator for frontend, backend, infra (framework-aware output)" },
        { title: "Cleaner/optimizer pass to make code production-friendly" },
        { title: "Safety checks (secrets, blocked patterns, dependency scanning)" },
        { title: "Fine-tuning & prompt templates for domain-specific outputs" }
      ]
    },

    {
      title: "Project Model & VIB (intermediate representation)",
      description: "Keep an internal structured representation of the app (models, routes, components) so edits and re-generations are deterministic.",
      items: [
        { title: "Canonical project schema (pages, components, endpoints, DB models)" },
        { title: "Editable intermediate representation (VIB-like) for deterministic regeneration" },
        { title: "Two-way sync: code ↔ IR ↔ preview" }
      ]
    },

    {
      title: "Built-in Backend (Cloud) & Services",
      description: "Provide optional managed backend features so non-devs get full apps without infra setup.",
      items: [
        { title: "Managed authentication (email/password, OAuth providers)" },
        { title: "Managed database (row-level access controls, migrations)" },
        { title: "File storage, object uploads and CDN integration" },
        { title: "Serverless functions or managed API endpoints" },
        { title: "Settings to opt out and self-host backend if desired" }
      ]
    },

    {
      title: "Editor & Live Preview",
      description: "UI that shows generated code and a live app preview side-by-side — edits in either place are reconciled.",
      items: [
        { title: "In-browser code editor with syntax highlighting and commit support" },
        { title: "WYSIWYG visual edits that translate back to code" },
        { title: "Hot-reload live preview for quick iteration" },
        { title: "Version history and snapshots per change" }
      ]
    },

    {
      title: "Source Control & CI Integration",
      description: "Keep generated apps in Git and integrate with CI/CD for production workflows.",
      items: [
        { title: "One-click GitHub/GitLab repo creation & push" },
        { title: "Auto-commit generated code with clear metadata and commit messages" },
        { title: "Optional generated GitHub Actions workflows for build/deploy" },
        { title: "Allow users to take ownership of the repo and continue development" }
      ]
    },

    {
      title: "Preview Environments & PR Previews",
      description: "Create ephemeral, shareable environments for each branch or PR to review changes.",
      items: [
        { title: "Create a preview for every branch / PR with unique URL" },
        { title: "Isolated data for previews or lightweight shared test datasets" },
        { title: "Auto-destroy previews on merge/close to reduce cost" }
      ]
    },

    {
      title: "Deployment & Hosting",
      description: "Flexible hosting targets — managed hosting (platform cloud), container targets, or export to user infra.",
      items: [
        {
          title: "Managed Hosting",
          items: [
            { title: "Platform-operated runtime for web + serverless functions" },
            { title: "Automatic CDN, TLS, domains, and scaling" },
            { title: "One-click custom domain + DNS setup" }
          ]
        },
        {
          title: "Self-host / Export",
          items: [
            { title: "Export full codebase with Dockerfile and deployment scripts" },
            { title: "Instructions for deploying to EC2, Kubernetes, or Vercel" }
          ]
        }
      ]
    },

    {
      title: "Runners & Build Infrastructure",
      description: "Ephemeral build runners execute generation, tests and production builds.",
      items: [
        { title: "Cloud-hosted ephemeral runners for deterministic builds" },
        { title: "Self-hosted runners for enterprises with private network needs" },
        { title: "Cache layers and artifact storage to speed repeat builds" }
      ]
    },

    {
      title: "Observability & Debugging",
      description: "Expose logs, metrics, and a rich debugging experience from generation → build → runtime.",
      items: [
        { title: "Generation logs showing AI plan, diffs and transformations" },
        { title: "Build & deployment logs (searchable, downloadable)" },
        { title: "Runtime logs and metrics (requests, latency, errors)" },
        { title: "Integrated error reporting (Sentry-style) and alerts" }
      ]
    },

    {
      title: "Secrets & Environment Management",
      description: "Securely store build-time and runtime secrets with granular scopes.",
      items: [
        { title: "Encrypted secrets store with per-project scoping" },
        { title: "Separate build vs runtime secrets" },
        { title: "Secret rotation, audit logs and RBAC-based access" },
        { title: "Integrations with Vault / AWS Secrets Manager for enterprises" }
      ]
    },

    {
      title: "Safety, Code Quality & Compliance",
      description: "Guardrails to ensure generated code is secure, licensed correctly, and compliant for enterprise users.",
      items: [
        { title: "Dependency vulnerability scanning during generation and builds" },
        { title: "License checks for third-party packages" },
        { title: "Static analysis and unit test generation (optional)" },
        { title: "Policy engine to block harmful patterns in generated workflows" }
      ]
    },

    {
      title: "Extensibility & Plugins",
      description: "Allow custom templates, integrations, or plugins that extend generation capabilities.",
      items: [
        { title: "Prompt / template marketplace for vertical-specific app blueprints" },
        { title: "Custom code generation plugins (e.g., CRM, analytics, payments)" },
        { title: "Webhook and SDK hooks for third-party integrations" }
      ]
    },

    {
      title: "Teams, Permissions & Enterprise Features",
      description: "Organization controls, SSO, billing, and enterprise-grade support.",
      items: [
        { title: "Organization hierarchy with teams and role-based access control" },
        { title: "SSO (SAML / OIDC), enterprise onboarding and account management" },
        { title: "Audit logs, exportable activity reports and compliance packs" },
        { title: "Enterprise support SLAs and private cloud/self-host offerings" }
      ]
    },

    {
      title: "Billing & Usage Controls",
      description: "Meter and monetize by usage while offering a generous free tier for discovery.",
      items: [
        { title: "Free tier (limited generation minutes, previews, seats)" },
        { title: "Paid tiers: per-seat, build-minute, preview-hour billing" },
        { title: "Enterprise invoicing, committed use discounts and quotas" }
      ]
    },

    {
      title: "Legal, Privacy & Data Residency",
      description: "Allow customers to control where their data lives and how it’s processed.",
      items: [
        { title: "Data residency choices (regions) for project storage and builds" },
        { title: "Clear TOS and privacy rules for generated code ownership" },
        { title: "Opt-in / opt-out for model telemetry and training data usage" }
      ]
    },

    {
      title: "Analytics & Product Insights",
      description: "Track platform adoption, generation success, and app performance.",
      items: [
        { title: "Usage dashboards (generations, builds, previews, active apps)" },
        { title: "Conversion funnels: prompt → running app → deployed app" },
        { title: "Feature adoption metrics and cost-of-generation analytics" }
      ]
    },

    {
      title: "Support, Docs & Community",
      description: "Comprehensive guides and community support to reduce friction and grow adopters.",
      items: [
        { title: "Step-by-step docs and code samples for common stacks" },
        { title: "Tutorials, templates and curated starter projects" },
        { title: "Community channels (Discord, Forum), office hours, and partner network" }
      ]
    },

    {
      title: "Operational Playbooks",
      description: "Operational runbooks, incident management and upgrade paths for the platform.",
      items: [
        { title: "Incident response (failed generation, model outage, infra issues)" },
        { title: "Data backup & migrations playbooks" },
        { title: "Upgrade guides and breaking-change communication" }
      ]
    }

  ]
}]

