import { Contracts } from "ts-extractor";
import { LogLevel } from "simplr-logger";

import { ApiTypeParameter } from "./api-type-parameter";
import { ApiDefinitionWithType } from "../api-definition-with-type";
import { GeneratorHelpers } from "../../generator-helpers";
import { ReferenceRenderHandler } from "../../contracts/serialized-api-item";

export class ApiMapped extends ApiDefinitionWithType<Contracts.ApiMappedDto> {
    private typeParameter: ApiTypeParameter | undefined;

    public get TypeParameter(): ApiTypeParameter | undefined {
        if (this.typeParameter == null && this.ApiItem.TypeParameter != null) {
            const apiItem = this.ExtractedData.Registry[this.ApiItem.TypeParameter] as Contracts.ApiTypeParameterDto;
            this.typeParameter = new ApiTypeParameter(this.ExtractedData, apiItem, { Alias: apiItem.Name, Id: this.ApiItem.TypeParameter });
        }
        return this.typeParameter;
    }

    public ToText(render: ReferenceRenderHandler = this.DefaultReferenceRenderer): string[] {
        const readonly = this.ApiItem.IsReadonly ? "readonly " : "";
        const optional = this.ApiItem.IsOptional ? "?" : "";

        let typeParameterString: string;
        if (this.TypeParameter != null) {
            typeParameterString = this.TypeParameter.ToInlineText(render);
        } else {
            GeneratorHelpers.LogWithApiItemPosition(LogLevel.Warning, this.ApiItem, "A type parameter is missing!");
            typeParameterString = Contracts.TypeKeywords.Unknown;
        }

        const type = this.SerializedTypeToString(render, this.Type);

        return [
            `{`,
            `${GeneratorHelpers.Tab(1)}${readonly}[${typeParameterString}]${optional}: ${type}`,
            `}`
        ];
    }

    public ToHeadingText(): string {
        return this.Name;
    }
}
