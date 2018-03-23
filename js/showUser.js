(()=>{
      $.get("data/showUser/hello.php")
          .then(text=>{
					console.log(text,$(".navList>li:last-child"));
          $(".navList>li:last-child").html(text);  
        });
 })();
