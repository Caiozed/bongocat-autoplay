
var notes =
    [{ id: 1, wait: 300 }, { id: 1, wait: 600 }, { id: 2, wait: 900 }, { id: 3, wait: 1200 }, { id: 6, wait: 1900 }, { id: 3, wait: 2200 }, { id: 6, wait: 2500 },
    { id: 3, wait: 2800 }, { id: 3, wait: 3100 }, { id: 2, wait: 3400 }, { id: 1, wait: 3700 }, { id: 8, wait: 4000 }, { id: 1, wait: 4300 },
    { id: 1, wait: 4600 }, { id: 8, wait: 5200 }, { id: 1, wait: 5500 }, { id: 2, wait: 5800 }, { id: 3, wait: 6100 }]// Come as you are - Nirvana

    // [{ id: 3, wait: 300 }, { id: 0, wait: 800 }, { id: 0, wait: 1200 }, { id: 6, wait: 1600 }, { id: 5, wait: 2000 }, { id: 5, wait: 2400 }, { id: 5, wait: 2800 }, { id: 5, wait: 3200 }, { id: 6, wait: 3400 }, { id: 3, wait: 3600 },
    // { id: 0, wait: 4000 }, { id: 0, wait: 4500 }, { id: 6, wait: 4900 }, { id: 5, wait: 5300 }, { id: 5, wait: 5700 }, { id: 5, wait: 6100 }, { id: 5, wait: 6500 }, { id: 6, wait: 6700 }, { id: 3, wait: 6900 },
    // { id: 0, wait: 7300 }, { id: 0, wait: 7700 }, { id: 6, wait: 8200 }, { id: 5, wait: 8700 }, { id: 5, wait: 9000 }, { id: 5, wait: 9500 }, { id: 5, wait: 9900 }, { id: 6, wait: 10100 }, { id: 3, wait: 10300 },
    // { id: 0, wait: 10800 }, { id: 0, wait: 11300 }, { id: 6, wait: 11800 }, { id: 5, wait: 12300 }, { id: 5, wait: 12800 }, { id: 5, wait: 13300 }, { id: 5, wait: 13700 }, { id: 6, wait: 13900 }, { id: 3, wait: 14100 },
    // ]// In the End - Linkin Park

for (let index = 0; index < notes.length; index++) {
    const note = notes[index];
    setTimeout(() => {
        (function () {
            document.dispatchEvent(new KeyboardEvent('keydown', { 'key': `${note.id}` }));
            document.dispatchEvent(new KeyboardEvent('keyup', { 'key': `${note.id}` }));
        })()
    }, note.wait)
}

