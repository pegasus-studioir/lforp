const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('پینگ ربات را نشان میدهد')
		.setDMPermission(false),
	async execute(interaction, client) {
		let embed = new EmbedBuilder()
		.setColor("Green")
		.setTitle("پینگ من در همین لحظه:")
		.setDescription(`**${client.ws.ping}** Ms`)
		await interaction.reply({ embeds: [embed] });
	},
};