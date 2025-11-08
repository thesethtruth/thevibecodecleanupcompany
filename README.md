# Tender Information Extraction

A FastAPI-based web application for extracting and processing tender information from PDF documents using AI agents powered by Azure OpenAI and Azure Document Intelligence.

## Features

- **Document Processing**: Extract text and structured data from PDF documents
- **AI-Powered Analysis**: Use intelligent agents to analyze tender documents and extract key information
- **Web Interface**: User-friendly web interface for uploading and managing documents
- **REST API**: Comprehensive REST API for integration with other systems
- **Excel Report Generation**: Generate structured Excel reports from extracted data
- **Verification System**: Built-in verification agents to validate extracted information
- **Tracing Support**: Optional Langfuse integration for monitoring and debugging AI operations

## Architecture

The application consists of:

- **Backend** (FastAPI): REST API server with AI agent orchestration
- **Frontend** (HTML/JavaScript): Web interface for document management
- **Database** (PostgreSQL): Data persistence for processed documents and results
- **AI Services**: Azure OpenAI for intelligent analysis, Azure Document Intelligence for OCR

## Prerequisites

- Python 3.12+
- Docker and Docker Compose
- Azure subscription with:
  - Azure OpenAI resource
  - Azure Document Intelligence resource
- (Optional) Langfuse account for tracing

## Quick Start

### 1. Clone the repository

```bash
git clone <repository-url>
cd tenderinformatie_extraction
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

Edit `.env` with your Azure credentials:

```env
# Azure OpenAI Configuration
AZURE_OPENAI_API_KEY=your_azure_openai_api_key
AZURE_OPENAI_ENDPOINT=https://your-resource.openai.azure.com/
AZURE_OPENAI_API_VERSION=2024-02-01

# Azure Document Intelligence Configuration
AZURE_DOCUMENT_INTELLIGENCE_ENDPOINT=https://your-resource.cognitiveservices.azure.com/
AZURE_DOCUMENT_INTELLIGENCE_KEY=your_document_intelligence_key

# Optional: Langfuse for tracing
LANGFUSE_PUBLIC_KEY=your_langfuse_public_key
LANGFUSE_SECRET_KEY=your_langfuse_secret_key
LANGFUSE_HOST=https://your-langfuse-host.com
```

## Development Setup

### Using Dev Containers (Recommended)

1. Open the project in VS Code
2. When prompted, click "Reopen in Container"
3. The dev container will set up the full development environment
3. Run the application:
```bash
poetry run fastapi dev backend/app.py --host 0.0.0.0 --port 3000
```

## API Endpoints

### Document Management
- `GET /api/companies` - List available companies
- `GET /api/company/{company}/pdfs` - List PDFs for a company
- `GET /api/company/{company}/pdf/{pdf_name}` - Get PDF file
- `GET /api/company/{company}/json/{json_name}` - Get processed JSON data

### Processing
- `POST /api/process/{company}/{pdf_name}` - Process a PDF document
- `POST /api/json/save` - Save JSON data
- `POST /api/upload` - Upload files

### Reports
- `GET /api/reports/{company}` - Generate Excel report

### Real-time Updates
- `WebSocket /ws/logs` - Real-time processing logs

## Project Structure

```
├── backend/
│   ├── app.py                 # FastAPI application
│   ├── run_agent.py          # AI agent orchestration
│   ├── create_excel_report.py # Report generation
│   ├── verifier_agent.py     # Data verification
│   ├── structured_models.py  # Data models
│   ├── tools.py              # Agent tools
│   ├── config/
│   │   ├── vars.py           # Configuration variables
│   │   ├── dir.py            # Directory paths
│   │   └── setup_langfuse.py # Langfuse setup
│   └── util/
│       ├── document_utils.py # Document processing utilities
│       └── company_normalization.py # Data normalization
├── frontend/
│   ├── index.html            # Web interface
│   ├── script.js             # Frontend logic
│   └── styles.css            # Styling
├── .devcontainer/            # Dev container configuration
├── docker-compose.yml        # Production compose
├── docker-compose.local.yaml # Development compose
└── pyproject.toml            # Python dependencies
```

## Configuration

### Directory Structure

The application expects the following directory structure:

- `example_data/` - Raw PDF documents organized by company
- `example_parsed/` - Parsed markdown files
- `example_output/` - Processed JSON results and reports

### Environment Variables

See `.env.example` for all available configuration options.

## Usage

1. **Upload Documents**: Place PDF files in `example_data/{company_name}/`
2. **Process Documents**: Use the web interface or API to process documents
3. **Review Results**: Check extracted data in the web interface
4. **Generate Reports**: Download Excel reports with structured data
5. **Verify Data**: Use the verification agent to validate results



