const { exec } = require('child_process');
const path = require('path');
const platform = process.platform;

// Define os caminhos dos serviços e suas portas
const services = [
  { name: 'customer-service', path: path.join(__dirname, 'customer-service'), port: 4001 },
  { name: 'order-service', path: path.join(__dirname, 'order-service'), port: 4002 },
  { name: 'product-service', path: path.join(__dirname, 'product-service'), port: 4003 },
  { name: 'gateway', path: path.join(__dirname, 'gateway'), port: 4000 }
];

// Libera a porta caso haja uma funcionando
const killProcessOnPort = (port, callback) => {
  const findCommand = platform === 'win32'
    ? `netstat -ano | findstr :${port}`
    : `lsof -t -i:${port}`;

  exec(findCommand, (err, stdout) => {
    if (err || !stdout.trim()) {
      callback();
      return;
    }

    const pid = platform === 'win32' ? stdout.trim().split(/\s+/).pop() : stdout.trim();
    const killCommand = platform === 'win32'
      ? `taskkill /PID ${pid} /F`
      : `kill -9 ${pid}`;

    exec(killCommand, (killErr) => {
      if (killErr) {
        console.error(`⚠️ Erro ao liberar a porta ${port}: ${killErr.message}`);
      } else {
        console.log(`✅ Porta ${port} liberada.`);
      }
      callback();
    });
  });
};

// Inicia serviços em terminais separados
const startServices = () => {
  services.forEach(service => {
    killProcessOnPort(service.port, () => {
      console.log(`🔄 Iniciando o serviço: ${service.name} na porta ${service.port}...`);

      const servicePath = service.path;
      const terminalCommand = platform === 'win32'
        ? `start cmd /K "cd ${servicePath} && npm start"`
        : `gnome-terminal -- bash -c "cd ${servicePath} && npm start; exec bash"`;

      // Apenas abre os terminais separados
      exec(terminalCommand, (err) => {
        if (err) {
          console.error(`❌ Erro ao iniciar o terminal para ${service.name}: ${err.message}`);
        }
      });
    });
  });
};

// Inicia os serviços
startServices();
