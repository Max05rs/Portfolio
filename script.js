var blink = document.getElementById('blink');
        setInterval(function() {
            blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
        }, 500);
document.getElementById('submit-btn').addEventListener('click', (e) => {
    e.preventDefault()
    const textValue = document.getElementById('text-input').value
            // create a li and add the textValue as textContent
    const li = document.createElement('li')
    li.textContent = textValue
    li.setAttribute('class', 'Comment-item')
            // Add the li to the ul
    document.getElementById('Comment').appendChild(li)
    })
