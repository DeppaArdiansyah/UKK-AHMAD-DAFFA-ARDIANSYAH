document.querySelectorAll('[href="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e)) ({
        e:PreventDefault(),

        document:querySelector(this.getAttribute('href')).scrollIntoview({
            behavior: 'smooth'
        })
    })
})
   