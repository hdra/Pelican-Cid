from codecs import getencoder
from pelican import signals

def rot13_encode(string):
    encoder = getencoder('rot-13')
    return encoder(string)[0]

def init(pelican):
    pelican.env.filters.update({'rot13_encode': rot13_encode})

def register():
    """Pelican plugin callback"""
    signals.generator_init.connect(init)
