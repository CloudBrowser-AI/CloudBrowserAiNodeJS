import AIError from "../ai/types/ai-error.js";

declare interface OpenAIConfiguration {
    apiKey: string;
    model?: string | null;
}

declare interface AIOptions {
    openAIConfiguration: OpenAIConfiguration;
}

declare interface QueryRequest {
    html?: string | null;
    prompt?: string | null;
    responseFormat?: string | null;
}

declare interface OptimizeRequest {
    text?: string | null;
    instruction?: string | null;
    responseFormat?: string | null;
}

declare interface DescribeRequest {
    question?: string | null;
    base64Image?: string | null;
    imageUrl?: string | null;
    responseFormat?: string | null;
}

declare interface SummarizeRequest {
    html?: string | null;
    isoLang?: string | null;
    responseFormat?: string | null;
}

declare interface ToCSVRequest {
    html?: string | null;
    headers?: string | null;
    responseFormat?: string | null;
}

declare interface ToJSONRequest {
    html?: string | null;
    responseFormat?: string | null;
}

declare interface ToMarkdownRequest {
    html?: string | null;
}

declare interface TranslateRequest {
    text?: string | null;
    isoLang?: string | null;
    responseFormat?: string | null;
}

declare interface AIResponse {
    status: (typeof ResponseStatus)[keyof typeof ResponseStatus];
    response: string;
    openAiError?: keyof typeof AIError | null;
}

declare class AIService {
    constructor(apiToken: string, defaultAIOptions?: AIOptions | string);

    get baseAddress(): string;
    set baseAddress(value: string);

    query(
        rq: QueryRequest,
        aiOptions?: AIOptions,
        timeout?: number,
        ct?: AbortSignal
    ): Promise<AIResponse>;
    summarize(
        rq: SummarizeRequest,
        aiOptions?: AIOptions,
        timeout?: number,
        ct?: AbortSignal
    ): Promise<AIResponse>;
    optimize(
        rq: OptimizeRequest,
        aiOptions?: AIOptions,
        timeout?: number,
        ct?: AbortSignal
    ): Promise<AIResponse>;
    translate(
        rq: TranslateRequest,
        aiOptions?: AIOptions,
        timeout?: number,
        ct?: AbortSignal
    ): Promise<AIResponse>;
    describe(
        rq: DescribeRequest,
        aiOptions?: AIOptions,
        timeout?: number,
        ct?: AbortSignal
    ): Promise<AIResponse>;
    toJSON(
        rq: ToJSONRequest,
        aiOptions?: AIOptions,
        timeout?: number,
        ct?: AbortSignal
    ): Promise<AIResponse>;
    toCSV(
        rq: ToCSVRequest,
        aiOptions?: AIOptions,
        timeout?: number,
        ct?: AbortSignal
    ): Promise<AIResponse>;
    toMarkdown(
        rq: ToMarkdownRequest,
        aiOptions?: AIOptions,
        timeout?: number,
        ct?: AbortSignal
    ): Promise<AIResponse>;
}

export {
    AIService,
    AIOptions,
    OpenAIConfiguration,
    QueryRequest,
    OptimizeRequest,
    SummarizeRequest,
    ToCSVRequest,
    ToJSONRequest,
    ToMarkdownRequest,
    TranslateRequest,
    AIResponse,
    DescribeRequest,
    AIError,
};
