export type Inspection = {
  filename: string;
  size: number;
  sheets: Array<{
    name: string;
    row_count: number;
    columns: Array<{ id: string; name: string; type: string; index: number }>;
    preview: Array<Record<string, unknown>>;
  }>;
};

const baseUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:8000';

export async function inspectFile(file: File): Promise<Inspection> {
  const body = new FormData();
  body.append('file', file);
  const response = await fetch(`${baseUrl}/api/v1/files/inspect`, { method: 'POST', body });
  if (!response.ok) throw new Error((await response.json()).detail ?? '文件解析失败');
  return response.json() as Promise<Inspection>;
}

export async function saveDashboard(config: unknown): Promise<void> {
  const response = await fetch(`${baseUrl}/api/v1/dashboards/sales-overview`, {
    method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(config)
  });
  if (!response.ok) throw new Error('保存大屏失败');
}
