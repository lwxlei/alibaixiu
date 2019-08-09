var userArr = new Array()
$.ajax({
    type: 'get',
    url: '/users',
    success: function(res) {
        userArr = res
        render(userArr)
    }
})


function render(arr) {
    var str = template('userTpl', {
        list: arr
    })
    $('tbody').html(str)
}
$('button').on('click', function() {
    $.ajax({
        url: '/users',
        type: 'post',
        data: $('#userForm').serialize(),
        success: function(res) {
            userArr.push(res);
            render(userArr);
        }
    })
})
$('tbody').on('click', '.edit', function() {
    $('#userForm>12').text('修改用户');
    var trObj = $(this).parents('tr')
    var imgSrc = trObj.children(1).children('img').attr('src')
    $('#hiddenAvatar').val(imgSrc);
    if (imgSrc) {
        $('#preview').attr('src', imgSrc)
    } else {
        $('#preview').attr('src', "../asset/img/default.png")
    }
})