class Player 
	attr_accessor :name, :bankroll, :hand, :total

	def initialize name, bankroll, hand, total
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
	attr_accessor :face, :suit, :value
	def initialize face, suit, value
		@face = face
		@suit = suit
		@value = value
end
def generate_card (player)
	new_card = Card.new face, suit, value
	player.hand << new_card
	player.total = player.total + new_card.value

end
end


class Deck
	def initialize
		@faces = [*(2..10), 'Jack', 'Queen', 'King', 'Ace']
		@suits = ['clubs', 'spades', 'hearts', 'diamonds']
		@cards = []
	

		@faces.each do |face|
		if face.class == Integer
			value = face
		elsif face == 'Ace'
			value = 11
		else
			value = 10
		end
		@suits.each do |suit|
			@cards << Card.new(face, suit, value)
	end
end

@cards.shuffle!

end

def deal (num, player)
	num.times {@cards.shift.generate_card(player)}
end
end

#gameplay

# get player name

puts "Hey friend! What is your name?"
name = gets.chomp
puts "\n\nWelcome #{name}!"
human.name = "#{name}"


#loop

loop do
	puts "Press (d) to deal or (q) to quit."
	deal_hand = gets.chomp.downcase
	if deal_hand == "q"
		puts "Goodbye!"
		break
	else

	human.hand.clear
	human.total = 0
	computer.hand.clear
	computer.total = 0

	puts "\n\nHere are your cards:"
	deck = Deck.new 
	deck.deal(2, human)

	puts "The #{human.hand[0].face} of #{human.hand[0].suit}"
	puts "The #{human.hand[1].face} of #{human.hand[1].suit}\n\n"

	deck.deal(2, computer)
	# Tell the player one of the computer's cards (index 0)
	puts "Dealer's first card:"
	puts "The #{computer.hand[0].face} of #{computer.hand[0].suit}\n\n"


	until human.total >= 21 do
				# Ask the player what they want to do next? hit or stay?
				puts "Would you like to (h)it or (s)tay?"
				choice = gets.chomp.downcase

				# if player hits deal a new card
				# tell player new card
				# add 1 to index
				if choice == 'h'
					deck.deal(1, human)
					puts "Your new card is:"
					puts "The #{human.hand[0].face} of #{human.hand[0].suit}"
					puts "The total value in your hand is:"
					puts "#{human.total}"
					puts "The dealer has one card showing:"
					puts "The #{computer.hand[0].face} of #{computer.hand[0].suit}"
				else
					# once the player stays, end the loop
					break
				end
			end
			puts "Your hand has a total value of #{human.total}"
			puts "The computer has a hand value of #{computer.total}"

			#win/lose logic
			if human.total <= 21 && computer.total <= 21
				if human.total > computer.total
					puts "You win!\n\n"

					# Monies are exchanged
					human.bankroll += 10
					computer.bankroll -= 10

				elsif human.total < computer.total
					puts "Computer wins."

					# Monies are exchanged
					human.bankroll -= 10
					computer.bankroll += 10

				else
					puts "A tie goes to the dealter. Computer Wins."

					# Monies are exchanged
					human.bankroll -= 10
					computer.bankroll += 10
				end
			# if human is above 21, human loses
			elsif human.total > 21 && computer.total <= 21
				puts "You went over 21. Computer wins."

				# Monies are exchanged
				human.bankroll -= 10
				computer.bankroll += 10

			# if human is above 21, human loses
			elsif human.total <= 21 && computer.total > 21
				puts "Computer went over 21. You win!"

				# Monies are exchanged
				human.bankroll += 10
				computer.bankroll -= 10
			else
				# if both are above 21, no one wins.
				puts "You both went over 21. No one wins this round."

				# No Monies Exchanged
			end
			# Tell the player how much money they have
			puts "You now have $#{human.bankroll}"
			puts "The dealer now has $#{computer.bankroll}\n\n"
				if human.bankroll <= 0
					puts "Youre broke! "
					break
				else
				# Prompt to play again
				puts "Play again?"
				end
		end
	end

