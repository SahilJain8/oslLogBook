const ip = document.getElementsByTagName('input')
const errs = document.getElementById('err-msg')


ip[4].addEventListener('click', (e) => {
    e.preventDefault()
    let usn = ip[0].value
    let email = ip[1].value
    let name = ip[2].value
    let password = ip[3].value
    if (name != '' && password != '' && usn != '' && email != '') {
        fetch('/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usn, email, name, password
            })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.err === true) {
                    errs.innerText = data.msg
                }
                else {
                    location.reload()
                }

            })
    }
    else {
        errs.innerText = 'All fields are mandatory'
    }
})