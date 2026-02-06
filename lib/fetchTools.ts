import tools from "../data/tools.json" // Dataset (github->converted_Json-> alter_pros_and_cons_help_of_ai->tools.json)
import { AITool } from "./type" //interface for tool
import { validateTool } from "./ValidatData"// validation logic data present or not 

function normalizeTool(tool: AITool): AITool {// normalise dataset checking pros and cons is present or not 
  return {
    ...tool,
    pros: Array.isArray(tool.pros) ? tool.pros : [],//if pros is empty then assign empty array
    cons: Array.isArray(tool.cons) ? tool.cons : [],//if cons is empty then assign empty array
  }
}

export function getAllTools(): AITool[] { // for get valid tools
const tool =(tools as AITool[]).filter(validateTool)

  return tool.map(normalizeTool)
}

export function getToolBySlug(slug: string): AITool | null {//check slug and send tools
  const tool = (tools as AITool[]).find((t) => t.slug === slug)

  if (!tool || !validateTool(tool)) return null

  return normalizeTool(tool)
}