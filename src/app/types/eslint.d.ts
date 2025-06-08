declare module '@eslint/js' {
  const js: {
    configs: {
      recommended: any;
    };
  };
  export default js;
}

declare module 'eslint-plugin-react-hooks' {
  const reactHooks: {
    configs: {
      recommended: {
        rules: Record<string, any>;
      };
    };
  };
  export default reactHooks;
}

declare module 'eslint-plugin-react-refresh' {
  const reactRefresh: any;
  export default reactRefresh;
}

declare module 'typescript-eslint' {
  const tseslint: {
    config: (...args: any[]) => any;
    configs: {
      recommended: any[];
    };
  };
  export default tseslint;
} 