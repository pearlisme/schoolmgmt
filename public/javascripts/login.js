$(document).ready(function() {
    $('#login').click(function() {
        var progress = '<div class="preloader-wrapper big active"><div class="spinner-layer spinner-red-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div>';
        $('#progress').html(progress);
        $('#progress_modal').openModal();
        var username = $('#emp_id').val();
        var password = $('#emp_password').val();
        if (username == '') {
            $('#progress_modal').closeModal();
            $('#warning').html('Please enter your Employee ID');
            $('#warning_modal').openModal();
        } else if (password == '') {
            $('#progress_modal').closeModal();
            $('#warning').html('Please enter your password');
            $('#warning_modal').openModal();
        } else {
            var json = {
                username: username,
                password: password
            };
            $.ajax({
                url: '/validateLogin',
                type: 'POST',
                data: json,
                dataType: 'json'
            }).done(function(result) {
                if (result.error == 'none') {
                    localStorage.setItem('name', result.name);
                    localStorage.setItem('empid', result.empid);
                    localStorage.setItem('admin', result.privilege);
                    window.location.href = '/tickets';
                } else {
                    $('#progress_modal').closeModal();
                    $('#warning').html(result.message);
                    $('#warning_modal').openModal();
                }
            });
        }
    });
});
