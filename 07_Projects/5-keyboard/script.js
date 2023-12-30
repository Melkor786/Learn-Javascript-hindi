const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class='color'>
    <table>
        <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>Code</th>
        </tr>
        <tr>
            <th>${e.key===" "?"SPACE":e.key}</th>
            <th>${e.keyCode}</th>
            <th>${e.Code}</th>
        </tr>
    </table>
    </div>
    `
})