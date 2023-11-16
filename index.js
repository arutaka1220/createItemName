export function createItemName(namespaceId) {
  const hasNamespaceId = namespaceId.includes(":");

  if(hasNamespaceId) {
      const split = namespaceId.split(":")[1].split("_");
      return split.map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(" ");
  } else {
      const hasUnderBar = namespaceId.includes("_");
      
      if(hasUnderBar) {
        const split = namespaceId.split("_");
        return split.map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(" ")
      } else {
        return namespaceId.charAt(0).toUpperCase() + namespaceId.substring(1);
      }
  }
}
