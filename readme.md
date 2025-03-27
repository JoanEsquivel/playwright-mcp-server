# Playwright + MCP 
This is an experimental project to integrate Playwright with MCP. My plan is to conduct in-depth research, understand the intricacies of the integration, and review the best articles on the web to create the optimal version of a project using both technologies.

## MPC - All the concepts you need to know

### MCP (Model Context Protocol)

MCP is an open-source protocol developed by Anthropic that enables AI systems like Claude to securely connect with various data sources. It provides a universal standard for AI assistants to access external data, tools, and prompts through a client-server architecture.

#### MCP Servers?
MCP Servers are systems that provide context, tools, and prompts to AI clients. They can expose data sources like files, documents, databases, and API integrations, allowing AI assistants to access real-time information in a secure way.

#### How do MCP Servers work?
MCP Servers work through a simple client-server architecture. They expose data and tools through a standardized protocol, maintaining secure 1:1 connections with clients inside host applications like Claude Desktop.

#### What can MCP Servers provide?
MCP Servers can share resources (files, docs, data), expose tools (API integrations, actions), and provide prompts (templated interactions). They control their own resources and maintain clear system boundaries for security.

#### Are MCP Servers secure?
Yes, security is built into the MCP protocol. Servers control their own resources, there's no need to share API keys with LLM providers, and the system maintains clear boundaries. Each server manages its own authentication and access control.

## Claude
Claude AI (Claude) is a generative artificial intelligence (AI) chatbot and family of large language models (LLMs) developed by the research firm Anthropic. Claude excels at natural language processing (NLP) and is multimodal: it accepts text, audio and visual inputs and can answer questions, summarize documents and generate long-form text, diagrams, animations, program code and more.


### Models
- Claude 3.5 Sonnet underpins the free version of Claude AI. Its emphasis on speed enables it to quickly process user queries and other tasks requiring urgent data retrieval. According to Anthropic, Claude 3.5 Sonnet is twice as fast as Claude 3 Opus, one of the two premium offerings.
- Claude 3 Opus is one of two Claude models currently available to Claude Pro users. It provides in-depth document processing and content generation services, specializing in complex tasks. While slower than Claude 3.5 Sonnet, Opus runs a lower risk of hallucinations: when an AI model provides incorrect information as though it is factually correct.
- Claude 3 Haiku is the second premium Claude offering. It’s the smallest and fastest of the three and is ideal for use in summarizing long documents, real-time customer service and simple text generation.

### What is Claude used for?
Each of the three Claude 3 models has its own specialized use cases. In general, people can use Claude AI to help with a wide range of tasks, including:

Question-answering and research
Proofreading and editing
Document summarization, including PDFs and Word documents
Text and content generation
Language translation
Business plan creation
Image and audio processing
Code snippet generation and review

### How does Claude AI work?
Like Gemini and OpenAI’s ChatGPT, Anthropic’s Claude family of AI systems are based on the transformer architecture of neural network. But unlike its competitors, Claude applies the principles of Constitutional AI to govern its behavior.

- Transformer models excel at drawing connections between distant words in a user input sequence, enabling them to better understand context and generate long-form replies.
- Constitutional AI is a guiding set of harm reduction principles designed to make Claude more beneficial with less risk.

#### What are transformer models?
Transformers are a type of AI model built for high-performance natural language processing. They work by applying complex mathematical algorithms to statistically predict the most likely response to a user query. The workflow can be divided into four basic steps.

The transformer breaks up a user query into tokens. Each token represents either a whole word or a portion of a word. AI model pricing is typically represented as the cost per token. Claude Pro’s context window is 200,000 tokens1, meaning it can process user queries of up to 200,000 tokens in length.

Each token is plotted into a three-dimensional vector space via mathematical processes. Tokens that are assessed as more similar in meaning are plotted closer together in space, aiding LLMs in understanding user inputs. The result of this process is called a vector embedding.
Transformers such as Claude and GPT-4 apply self-attention mechanisms to self-direct resources on the most relevant portions of a user query and process context.
The model applies probabilistic algorithms to generate the most likely response to an input. AI models such as Claude don’t actually “know” anything—rather, they combine their training data with advanced statistics to yield the most probable outcomes to prompts.

#### What is Constitutional AI?
Constitutional AI2 is a set of AI ethics and safety principles created by AI startup Anthropic. When designing Claude, Anthropic sourced input from approximately 1,000 people, asking them to vote on and suggest rules for ethical generative AI operation and responsible AI use. The final assembly of rules formed the basis of Claude’s training process.

The first three rules of Constitutional AI are:

Choose the response that is the least dangerous or hateful.
Choose the response that is as reliable, honest, and close to the truth as possible.
Choose the response that best conveys clear intentions.


## Environment setup

1. Download Claude Desktop using this [link](https://claude.ai/download)
2. Open Claude, go to Settings -> Developer -> Edit Config -> claude_desktop_config.json and open it in your prefered text editor.
3. Based on [Playwright's documentation](https://github.com/microsoft/playwright-mcp) you need to configure the config file with the following lines:
```
    {
    "mcpServers": {
        "playwright": {
        "command": "npx",
        "args": [
            "@playwright/mcp@latest"
        ]
        }
    }
    }
```
4. Install Playwright
```
    npm init playwright@latest
```
5. Restart Claude Desktop, and that's it!


References used for this research: 
- [MCP](https://mcp.so/)
- [IBM Think](https://www.ibm.com/think/topics/claude-ai)