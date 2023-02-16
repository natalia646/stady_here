function explorer (htmlElement){
  console.log(htmlElement);
  const children = htmlElement.children;
  if (children.length !== 0){
    for(const child of children){
        explorer(child)
    }
  }
}
explorer(document.body)