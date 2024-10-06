Scratch.extensions.register('myCustomExtension', {
    getInfo: function () {
        return {
            id: 'myCustomExtension',
            name: 'Mijn Aangepaste Extensie',
            blocks: [
                {
                    opcode: 'doSomething',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'doe iets',
                    arguments: {}
                },
                {
                    opcode: 'setBackground',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'stel de achtergrond in op [COLOR]',
                    arguments: {
                        COLOR: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'colors',
                            defaultValue: 'blauw'
                        }
                    }
                }
            ],
            menus: {
                colors: ['blauw', 'groen', 'rood', 'geel'] // Kleurenmenu
            }
        };
    },
    
    doSomething: function (args) {
        console.log('Dit is iets dat ik doe!');
    },

    setBackground: function (args) {
        console.log(`Achtergrond ingesteld op: ${args.COLOR}`);
        // Hier voeg je de logica toe om de achtergrond in te stellen
    }
});
