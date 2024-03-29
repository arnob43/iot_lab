var Thingy = require('thingy52');
var ref = require('firebase');
var enabled;
var data = {};
var INTERVAL = 5000;
console.log('Reading Thingy environment sensors!');

function onTemperatureData(temperature) {
    // console.log('Temperature sensor: ' + temperature);
    data.temperature = temperature;
    data._id && delete data['_id'];
    const usersRef = ref.push();
    usersRef.set(data);
}

function onPressureData(pressure) {
    // console.log('Pressure sensor: ' + pressure);
    data.pressure = pressure;
}

function onHumidityData(humidity) {
    // console.log('Humidity sensor: ' + humidity);
    data.humidity = humidity;
}

function onGasData(gas) {
    // console.log('Gas sensor: eCO2 ' + gas.eco2 + ' - TVOC ' + gas.tvoc );
    data.eco2 = gas.eco2;
    data.tvoc = gas.tvoc;
}

function onColorData(color) {
    /* console.log('Color sensor: r ' + color.red +
        ' g ' + color.green +
        ' b ' + color.blue +
        ' c ' + color.clear ); */
    data.color = color;
}

function onRotationNotif(rotation) {
    data.rotation = rotation;
}

function onStepCounterNotif(steps) {
    data.steps = steps;
    console.log('Steps')
}

function onHeadingNotif(heading) {
    data.heading = heading;
}

function onButtonChange(state) {
    if (state == 'Pressed') {
        if (enabled) {
            enabled = false;
            this.temperature_disable(function (error) {
                console.log('Temperature sensor stopped! ' + ((error) ? error : ''));
            });
            this.pressure_disable(function (error) {
                console.log('Pressure sensor stopped! ' + ((error) ? error : ''));
            });
            this.humidity_disable(function (error) {
                console.log('Humidity sensor stopped! ' + ((error) ? error : ''));
            });
            this.color_disable(function (error) {
                console.log('Color sensor stopped! ' + ((error) ? error : ''));
            });
            this.gas_disable(function (error) {
                console.log('Gas sensor stopped! ' + ((error) ? error : ''));
            });
        } else {
            enabled = true;
            this.temperature_enable(function (error) {
                console.log('Temperature sensor started! ' + ((error) ? error : ''));
            });
            this.pressure_enable(function (error) {
                console.log('Pressure sensor started! ' + ((error) ? error : ''));
            });
            this.humidity_enable(function (error) {
                console.log('Humidity sensor started! ' + ((error) ? error : ''));
            });
            this.color_enable(function (error) {
                console.log('Color sensor started! ' + ((error) ? error : ''));
            });
            this.gas_enable(function (error) {
                console.log('Gas sensor started! ' + ((error) ? error : ''));
            });
        }
    }
}

function startSensors(thingy) {
    console.log('Discovered: ' + thingy);

    thingy.on('disconnect', function () {
        console.log('Disconnected!');
    });


    thingy.on('temperatureNotif', onTemperatureData);
    thingy.on('pressureNotif', onPressureData);
    thingy.on('humidityNotif', onHumidityData);
    thingy.on('gasNotif', onGasData);
    thingy.on('colorNotif', onColorData);
    thingy.on('buttonNotif', onButtonChange);
    thingy.on('rotationNotif', onRotationNotif);
    thingy.on('stepCounterNotif', onStepCounterNotif);
    thingy.on('headingNotif', onHeadingNotif);

    thingy.temperature_interval_set(INTERVAL, function (error) {
        if (error) {
            console.log('Temperature sensor configure! ' + error);
        }
    });
    thingy.pressure_interval_set(INTERVAL, function (error) {
        if (error) {
            console.log('Pressure sensor configure! ' + error);
        }
    });
    thingy.humidity_interval_set(INTERVAL, function (error) {
        if (error) {
            console.log('Humidity sensor configure! ' + error);
        }
    });
    thingy.color_interval_set(INTERVAL, function (error) {
        if (error) {
            console.log('Color sensor configure! ' + error);
        }
    });
    thingy.gas_mode_set(1, function (error) {
        if (error) {
            console.log('Gas sensor configure! ' + error);
        }
    });
    thingy.stepCounter_interval_set(INTERVAL, function (error) {
        if (error) {
            console.log('Step interval sensor configure! ' + error);
        }
    });

    thingy.stepCounter_interval_set(INTERVAL, function (error) {
        if (error) {
            console.log('Step interval sensor configure! ' + error);
        }
    });

    enabled = true;

    thingy.temperature_enable(function (error) {
        console.log('Temperature sensor started! ' + ((error) ? error : ''));
    });
    thingy.pressure_enable(function (error) {
        console.log('Pressure sensor started! ' + ((error) ? error : ''));
    });
    thingy.humidity_enable(function (error) {
        console.log('Humidity sensor started! ' + ((error) ? error : ''));
    });
    thingy.color_enable(function (error) {
        console.log('Color sensor started! ' + ((error) ? error : ''));
    });
    thingy.gas_enable(function (error) {
        console.log('Gas sensor started! ' + ((error) ? error : ''));
    });
    thingy.button_enable(function (error) {
        console.log('Button started! ' + ((error) ? error : ''));
    });
    thingy.rotation_enable(function (error) {
        console.log('Rotation sensor started ' + error ? error : '');
    });
    thingy.heading_enable(function (error) {
        console.log('Heading sensor started ' + error ? error : '');
    });

    thingy.stepCounter_enable(function (error) {
        console.log('Step counter sensor started ' + error ? error : '');
    });
}

const thingyServices = {
    start: function (thingy) {
        startSensors.bind(thingy);
        startSensors(thingy)
    }
};

module.exports = thingyServices;


