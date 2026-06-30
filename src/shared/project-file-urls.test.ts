import { describe, expect, test } from "bun:test"
import { buildProjectFileContentUrl, buildProjectFilePreviewUrl } from "./project-file-urls"

describe("project file urls", () => {
  test("builds content and download urls with encoded file paths", () => {
    expect(buildProjectFileContentUrl("project-1", "dist/demo page.html"))
      .toBe("/api/projects/project-1/files/dist%2Fdemo%20page.html/content")
    expect(buildProjectFileContentUrl("project-1", "dist/demo page.html", { download: true }))
      .toBe("/api/projects/project-1/files/dist%2Fdemo%20page.html/content?download=1")
  })

  test("builds preview urls with path segments preserved", () => {
    expect(buildProjectFilePreviewUrl("project-1", "dist/demo page.html"))
      .toBe("/api/projects/project-1/preview/dist/demo%20page.html")
  })
})
