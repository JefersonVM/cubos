const json = JSON.stringify(['Jeferson', 'Lima', 'Santos', 'Brasil']);

const converterJson = (info: string): unknown => {

    return JSON.parse(info);

  
}

const jsonConvertido = converterJson(json)  as string[];

console.log(jsonConvertido[0]);

