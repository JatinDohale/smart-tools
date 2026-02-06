import { AITool } from "./type";

export function validateTool(tool: AITool): boolean {
  return Boolean(
    tool.name &&
    tool.slug &&
    tool.description &&
    tool.category &&
    tool.website
  );
}
