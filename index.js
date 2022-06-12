// code your solution here
function superbowlWin() {
    const record = {
      year: "2015",
      result: "W",
  
    };
  }
  superbowlWin =(record)=>{
      const result=record.find(record=>record.result==="W");
      return !!result? result.year:undefined;
     
  }