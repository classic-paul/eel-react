import eel
from time import sleep


@eel.expose
def add(a, b):
    x = a + b
    print('Adding {} to {}, gets {}'.format(a, b, x))
    try:
        eel.hello('From Python')
    except AttributeError:
        print('Function Not Found')


def start_eel(should_sleep=True, develop=True):
    if should_sleep:
        sleep(4)
    if develop:
        page = {
            'port': 3000
        }
    else:
        page = 'sample.html'

    eel.start(page, options={
        'port': 8888,
        'host': 'localhost',
    })


if __name__ == '__main__':
    eel.init('client')
    start_eel(should_sleep=True, develop=True)
