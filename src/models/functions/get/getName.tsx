export  const getName = (obj:Object):string => {
    return "name" in obj ?
     typeof obj.name == "string"
    ? obj.name : "" : "";
  }
