export function buildProjectFileContentUrl(projectId: string, filePath: string, options: { download?: boolean } = {}) {
  const url = `/api/projects/${encodeURIComponent(projectId)}/files/${encodeURIComponent(filePath)}/content`
  return options.download ? `${url}?download=1` : url
}

export function buildProjectFilePreviewUrl(projectId: string, filePath: string) {
  return `/api/projects/${encodeURIComponent(projectId)}/preview/${encodeProjectPreviewPath(filePath)}`
}

function encodeProjectPreviewPath(filePath: string) {
  return filePath
    .split("/")
    .filter((part) => part.length > 0)
    .map(encodeURIComponent)
    .join("/")
}
