function a7_0x250e(_0x155be4,_0x29791){const _0x569f96=a7_0x569f();return a7_0x250e=function(_0x250e24,_0x5e40e8){_0x250e24=_0x250e24-0xe5;let _0x36db5=_0x569f96[_0x250e24];return _0x36db5;},a7_0x250e(_0x155be4,_0x29791);}const a7_0x6f46b=a7_0x250e;function a7_0x569f(){const _0x109881=['3693605akTKKt','Failed\x20to\x20clear\x20the\x20log\x20file:\x20','message','error','YYYY-MM-DD\x20HH:mm:ss','warn','12Mrwkpx','setLevel','debug','797237BhZJsg','clear','log/app.log','truncate','logger','49176ZJbWFp','2695011yPqvub','20ZyMbGc','File','335731XByxKq','Log\x20file\x20cleared','16CgKNyf','670118UOxjbe','info','182912dOKLsq','6fTiANK',']:\x20'];a7_0x569f=function(){return _0x109881;};return a7_0x569f();}(function(_0xe0e390,_0x168b4d){const _0x44f084=a7_0x250e,_0x434bbf=_0xe0e390();while(!![]){try{const _0x1a61c0=parseInt(_0x44f084(0xfb))/0x1+-parseInt(_0x44f084(0xfe))/0x2+-parseInt(_0x44f084(0xef))/0x3*(-parseInt(_0x44f084(0xe6))/0x4)+-parseInt(_0x44f084(0xe9))/0x5*(-parseInt(_0x44f084(0xe7))/0x6)+parseInt(_0x44f084(0xf2))/0x7*(-parseInt(_0x44f084(0xfd))/0x8)+-parseInt(_0x44f084(0xf7))/0x9*(parseInt(_0x44f084(0xf9))/0xa)+-parseInt(_0x44f084(0xf8))/0xb;if(_0x1a61c0===_0x168b4d)break;else _0x434bbf['push'](_0x434bbf['shift']());}catch(_0x37a70a){_0x434bbf['push'](_0x434bbf['shift']());}}}(a7_0x569f,0x6b142));import{createLogger,format,transports}from'winston';import a7_0xe947c5 from'fs';const {combine,timestamp,printf,colorize}=format,customFormat=printf(({level:_0x4f379c,message:_0x185b7b,timestamp:_0x41f19d})=>{const _0xd4ecd1=a7_0x250e;return _0x41f19d+'\x20['+_0x4f379c+_0xd4ecd1(0xe8)+_0x185b7b;});class Logger{constructor(){const _0x49213f=a7_0x250e;this[_0x49213f(0xf6)]=createLogger({'level':_0x49213f(0xf1),'format':combine(timestamp({'format':_0x49213f(0xed)}),colorize(),customFormat),'transports':[new transports[(_0x49213f(0xfa))]({'filename':_0x49213f(0xf4)})],'exceptionHandlers':[new transports[(_0x49213f(0xfa))]({'filename':_0x49213f(0xf4)})],'rejectionHandlers':[new transports[(_0x49213f(0xfa))]({'filename':_0x49213f(0xf4)})]});}[a7_0x6f46b(0xe5)](_0x3f8500){const _0x4e4f70=a7_0x6f46b;this['logger'][_0x4e4f70(0xe5)](_0x3f8500);}[a7_0x6f46b(0xee)](_0x4eead4){const _0x370e5a=a7_0x6f46b;this[_0x370e5a(0xf6)][_0x370e5a(0xee)](_0x4eead4);}[a7_0x6f46b(0xec)](_0x119eaa){const _0x7f8439=a7_0x6f46b;this[_0x7f8439(0xf6)][_0x7f8439(0xec)](_0x119eaa);}[a7_0x6f46b(0xf1)](_0x5f3e5a){this['logger']['debug'](_0x5f3e5a);}[a7_0x6f46b(0xf0)](_0x13efd3){const _0x208a79=a7_0x6f46b;this[_0x208a79(0xf6)]['level']=_0x13efd3;}[a7_0x6f46b(0xf3)](){const _0x34277c=a7_0x6f46b;a7_0xe947c5[_0x34277c(0xf5)](_0x34277c(0xf4),0x0,_0x33b69f=>{const _0x5f4784=_0x34277c;_0x33b69f?this[_0x5f4784(0xf6)][_0x5f4784(0xec)](_0x5f4784(0xea)+_0x33b69f[_0x5f4784(0xeb)]):this['logger'][_0x5f4784(0xe5)](_0x5f4784(0xfc));});}}export default new Logger();