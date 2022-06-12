// code your solution here
function superbowlWin() {
  const record = {
    year: " ",
    result: "W",

  };
}

  superbowlWin =(record)=>{
      const result=record.find(record=>record.result==="W");
      return !!result? result.year:undefined;
     
  }