export interface ErrorViewPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
