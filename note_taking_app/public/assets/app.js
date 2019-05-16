$(document).ready(function () {
    $.get("/api/notes").then(function (data) {
        console.log(data)
        data.forEach(note => {
            $(".start").append(
                `<div class="note-wrapper">
                    <div class="id">
                        ${note.id}
                    </div>
                    <div class="name">
                        ${note.name}
                    </div>
                    <div class="subject">
                        ${note.subject}
                    </div>
                    <div class="note">
                        ${note.note}
                    </div>
                </div>`
            )
        })
    })
})