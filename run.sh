#!/bin/sh

Xvfb -screen 0 1024x768x24 :99 &
npx currents run --record --key x8twZcz9xf5DXv79 --parallel --ci-build-id `date +%y%m%d_%H%M` &
npx currents run --record --key x8twZcz9xf5DXv79 --parallel --ci-build-id `date +%y%m%d_%H%M` &
npx currents run --record --key x8twZcz9xf5DXv79 --parallel --ci-build-id `date +%y%m%d_%H%M` &