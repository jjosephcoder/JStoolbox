function animal(obj){

//let equals the concatenation of strings and oject paired key values

  let output = "This " + obj.color + " "+ obj.name + " has " + obj.legs + " legs." 
  return (output)
}

animal({name:"dog",legs:4,color:"white"})