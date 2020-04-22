class Player 
	attr_accessor :name, :bankroll, :hand

	def initialize name, bankroll, hand
		@name = name
		@bankroll = bankroll
		@hand = []
		@total = total
	end
end

human = Player.new "Human", [], 100, 0
computer = Player.new "Computer", [], 10000, 0

deck = []

class Card
	attr_accessor: :face, :suit, :value
	def initialize face, suit, value
		@face = face
		@suit = suit
		@value = value
end

class Deck
	def initialize
		@faces = [*(2..10), 'Jack', 'Queen', 'King', 'Ace']
		@suits = ['clubs', 'spades', 'hearts', 'diamonds']
		@ cards = []
end
	def deal (num, player)

	num.times {@cards.shift.generate_card(player)}
end

@faces.each do |face|
	if face.class == Integer
		value = face
	elsif face == 'Ace'
		value = 11
	else
		value = 10
	end
	@suits.each do |suit|
		@cars << Card.new(face, suit, value)
	end
end

@cards.shuffle!

end

@suits.each do |suit|
	@cards << Card.new(face, suit, value)
end

def generate_card (player)
	new_card = Card.new face, suit, value
	player.hand << new_card
	player.total = player.total + new_card.value
end


