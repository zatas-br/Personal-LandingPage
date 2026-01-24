"use server"

import fs from "fs"
import path from "path"

export async function getComponentCode(componentPath: string) {
  try {
    // Basic security check to prevent directory traversal
    if (componentPath.includes("..")) {
      throw new Error("Invalid path")
    }

    // Resolve path relative to the components directory
    // Assuming the process runs in the root of the project
    const fullPath = path.join(process.cwd(), "components", componentPath)

    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      // Try with .tsx extension if not provided
      if (fs.existsSync(fullPath + ".tsx")) {
        return await fs.promises.readFile(fullPath + ".tsx", "utf-8")
      }
       // Try with .ts extension if not provided
      if (fs.existsSync(fullPath + ".ts")) {
        return await fs.promises.readFile(fullPath + ".ts", "utf-8")
      }
      return `Error: File not found at ${componentPath}`
    }

    const content = await fs.promises.readFile(fullPath, "utf-8")
    return content
  } catch (error) {
    console.error("Error reading file:", error)
    return "Error reading file content."
  }
}
