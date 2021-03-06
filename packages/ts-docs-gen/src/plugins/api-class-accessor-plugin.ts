import { Contracts } from "ts-extractor";
import { MarkdownBuilder } from "@simplrjs/markdown";

import { SupportedApiItemKindType, PluginOptions, PluginResult } from "../contracts/plugin";
import { GeneratorHelpers } from "../generator-helpers";
import { BasePlugin } from "../abstractions/base-plugin";
import { ApiAccessor } from "../api-items/definitions/api-accessor";

export type Kind = Contracts.ApiSetAccessorDto | Contracts.ApiGetAccessorDto;

export class ApiClassAccessorPlugin extends BasePlugin<Kind> {
    public SupportedApiDefinitionKind(): SupportedApiItemKindType[] {
        return [
            GeneratorHelpers.ApiDefinitionKind.GetAccessor,
            GeneratorHelpers.ApiDefinitionKind.SetAccessor,
        ];
    }

    public Render(options: PluginOptions, apiItem: Kind): PluginResult {
        const serializedApiItem = new ApiAccessor(options.ExtractedData, apiItem, options.Reference);

        const heading = serializedApiItem.ToHeadingText();
        const pluginResult: PluginResult = {
            ...GeneratorHelpers.GetDefaultPluginResultData(),
            ApiItem: apiItem,
            Reference: options.Reference,
            Headings: [
                {
                    ApiItemId: options.Reference.Id,
                    Heading: heading
                }
            ],
            UsedReferences: [options.Reference.Id]
        };

        // Header
        pluginResult.Result = new MarkdownBuilder()
            .Header(heading, 3)
            .EmptyLine()
            .Text(this.RenderApiItemMetadata(apiItem))
            .Code(serializedApiItem.ToText(), GeneratorHelpers.DEFAULT_CODE_OPTIONS)
            .GetOutput();

        // Type
        const typeResult = this.RenderType(options.ExtractedData, serializedApiItem.Type);
        GeneratorHelpers.MergePluginResultData(pluginResult, typeResult);

        return pluginResult;
    }
}
