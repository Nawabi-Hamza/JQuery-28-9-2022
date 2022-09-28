var date = new Date()
$('#date').text(date)

// var xhr = new XMLHttpRequest()
// console.log(xhr)

// $("button").click(function(){
//    $('h1').load('header.html')
//   });

//   $('.header').load('header.html')
//   $('.footer').load('footer.html')
//   $('.body_page').load('body.html',function(resposeTxt,statusTxt,xhr){
//         if(statusTxt == "success"){
//             console.log('data loaded')
//         }
//         else if(statusTxt == "error"){
//             console.log('somethis went wrong ' + xhr.status + xhr.statusTxt)
//         }
//         else if(statusTxt == "404"){
//             console.log('this 404 ' + xhr.status +" "+ xhr.statusTxt)
//         }
//   })


        // $.get('body.html' , function(data){
        //     // console.log(date)
        //     $('.body_page').html(data)
        // })

    // var show = $('.body_page')
    // var plc = ' ';

    // $.get('products.json' , function(data){

    //     // $('.body_page').html(data)

    //     for(let key in data){
    //      plc += ` ${data[key].name} , price: ${data[key].price}</br>`
    //      show.html(plc)

    //         // console.log(data)
    //     }
    // })


    // $.getJSON('https://jsonplaceholder.typicode.com/posts' , data => {
    //     console.log(data)

    //     $.each(data ,(i,pro) =>{
    //         $('.body_page').append(pro.title+"</br>")
    //     })
    // })


//   fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((Response)=>Response.json())
//   .then((json)=>console.log(json))

    //  ajax گرفتن دیتا

  $.ajax({
    method:'GET',
    url:'https://jsonplaceholder.typicode.com/posts',
    dataType:'json'
  })
  .done((data)=>{
    // console.log(data)
    $.each(data,(i,data)=>{
        // console.log(data.id)
        $('.body_page').append("<b>"+data.title+"</b></br>"+data.body+"</br><hr>")
    })

  })
//   اضافه کردن دیتا
 
// $('#postForm').submit((e)=>{
//     e.preventDefault();
//     // alert('submited success fuly')
//     var title = $('#title').val()
//     var body = $('#body').val()
//     var url = $(this).attr('action')
//     $.post(url,{title:title , body:body})
//     console.log( title , body+'save to the API server')

//     $.done((data)=>{
//         console.log(data)
//     })
// })
 





















