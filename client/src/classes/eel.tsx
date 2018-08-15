export const eel = window['eel'];

eel.expose(hello);
function hello(x: any) {
    console.log(x)
}
