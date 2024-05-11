const copyToClipboard = async (context: string) => {
  await navigator.clipboard.writeText(context);
};

export const globalUtils = { copyToClipboard };
