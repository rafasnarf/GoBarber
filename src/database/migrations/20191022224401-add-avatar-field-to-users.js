module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users', // Primeiro parametro "Nome da Tabela Alterada"
      'avatar_id', // Segundo parametro "Nome da Coluna Adicionada"
      // Informações sobre a coluna
      {
        type: Sequelize.INTEGER,
        // Referencia a tabelae identifica que a PK é referenciada pela id do Usuário
        references: { model: 'files', key: 'id' },
        // O que acontece com os dados no Update e no Delete
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      }
    );
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};
