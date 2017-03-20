###
#
# Created by Holden on 8/25/2016
#
# SOLVED on 8/30/2016
#
# Problem 54 - Poker Hands
#
###

class Card:
    
    faceValues = {"2": 2,
                  "3": 3,
                  "4": 4,
                  "5": 5,
                  "6": 6,
                  "7": 7,
                  "8": 8,
                  "9": 9,
                  "T": 10,
                  "J": 11,
                  "Q": 12,
                  "K": 13,
                  "A": 14}
    
    def __init__(self, card):
        self._value = card[0]
        self._suit = card[1]
        self._numericalValue = self.faceValues[self._value]
        
    def __eq__(self, other):
        return self._numericalValue == other._numericalValue
        
    def __lt__(self, other):
        return self._numericalValue < other._numericalValue
    
    def __gt__(self, other):
        return self._numericalValue > other._numericalValue
    
    def __repr__(self):
        return self._value + self._suit
    
    def getValue(self):
        return self._value
    
    def getSuit(self):
        return self._suit
    
    def getNumericalValue(self):
        return self._numericalValue

class Hand:
    
    handValues = {"High Card": 0,
                  "One Pair": 1,
                  "Two Pairs": 2,
                  "Three of a Kind": 3,
                  "Straight": 4,
                  "Flush": 5,
                  "Full House": 6,
                  "Four of a Kind": 7,
                  "Straight Flush": 8,
                  "Royal Flush": 9}
    
    def __init__(self, cards):
        
        self._hand = sorted(list(map(lambda x: Card(x), cards)))
        self._handValue = self.checkHand(self._hand)
        
    def __eq__(self, other):
        if self._handValue != other._handValue:
            return self._handValue == other._handValue
        
        return (self._hand[4] == other._hand[4] and 
                self._hand[3] == other._hand[3] and 
                self._hand[2] == other._hand[2] and 
                self._hand[1] == other._hand[1] and 
                self._hand[0] == other._hand[0])
    
    def __lt__(self, other):
        if self._handValue != other._handValue:
            return self.handValues[self._handValue] < self.handValues[other._handValue]
        
        if self._handValue in ["Straight", "Straight Flush", "Royal Flush"]:
            return self._hand[0] < other._hand[0]
        
        if self._handValue in ["Three of a Kind", "Full House", "Four of a Kind"]:
            return self._hand[2] < other._hand[2]
        
        if self._handValue == "Two Pair":
            if self._hand[3] == other._hand[3]:
                if self._hand[1] == other._hand[1]:
                    return (self._hand[4] < other._hand[4] or 
                            self._hand[2] < other._hand[2] or 
                            self._hand[0] < other._hand[0])
                return self._hand[1] < other._hand[1]
            return self._hand[3] < other._hand[3]
        
        if self._handValue in ["High Card", "Flush"]:
            for n in range(5):
                if self._hand[4 - n] != other._hand[4 - n]:
                    return self._hand[4 - n] < other._hand[4 - n]
        
        if self._hand[3] == self._hand[4] or self._hand[3] == self._hand[2]:
            selfPair = self._hand[3]
        else:
            selfPair = self._hand[1]
        if other._hand[3] == other._hand[4] or other._hand[3] == other._hand[2]:
            otherPair = other._hand[3]
        else:
            otherPair = other._hand[1]
        if selfPair != otherPair:
            return selfPair < otherPair
        for n in range(5):
            if self._hand[4 - n] != other._hand[4 - n]:
                return self._hand[4 - n] < other._hand[4 - n]
        
    def __gt__(self, other):
        if self._handValue != other._handValue:
            return self.handValues[self._handValue] > self.handValues[other._handValue]
        
        if self._handValue in ["Straight", "Straight Flush", "Royal Flush"]:
            return self._hand[0] > other._hand[0]
        
        if self._handValue in ["Three of a Kind", "Full House", "Four of a Kind"]:
            return self._hand[2] > other._hand[2]
        
        if self._handValue == "Two Pair":
            if self._hand[3] == other._hand[3]:
                if self._hand[1] == other._hand[1]:
                    return (self._hand[4] > other._hand[4] or 
                            self._hand[2] > other._hand[2] or 
                            self._hand[0] > other._hand[0])
                return self._hand[1] > other._hand[1]
            return self._hand[3] > other._hand[3]
        
        if self._handValue in ["High Card", "Flush"]:
            for n in range(5):
                if self._hand[4 - n] != other._hand[4 - n]:
                    return self._hand[4 - n] > other._hand[4 - n]
                
        if self._hand[3] == self._hand[4] or self._hand[3] == self._hand[2]:
            selfPair = self._hand[3]
        else:
            selfPair = self._hand[1]
        if other._hand[3] == other._hand[4] or other._hand[3] == other._hand[2]:
            otherPair = other._hand[3]
        else:
            otherPair = other._hand[1]
        if selfPair != otherPair:
            return selfPair > otherPair
        for n in range(5):
            if self._hand[4 - n] != other._hand[4 - n]:
                return self._hand[4 - n] > other._hand[4 - n]
        
    def __repr__(self):
        return self._handValue
        
    def getHand(self):
        return self._hand
    
    def checkHand(self, hand):
        c1 = hand[0]
        straightCount = 1
        
        isFlush = True
        isStraight = True
        
        for card in hand[1:]:
            if card.getSuit() != c1.getSuit():
                isFlush = False
            if card.getNumericalValue() != c1.getNumericalValue() + straightCount:
                isStraight = False
                
            straightCount += 1
            
        if isFlush:
            if isStraight:
                if c1.getValue() == "T":
                    return "Royal Flush"
                return "Straight Flush"
            return "Flush"
        if isStraight:
            return "Straight"
        
        c2 = self._hand[1]
        c3 = self._hand[2]
        c4 = self._hand[3]
        c5 = self._hand[4]
        
        if c2 == c1:
            if c2 == c3:
                if c2 == c4:
                    return "Four of a Kind"
                if c4 == c5:
                    return "Full House"
                return "Three of a Kind"
            if c4 == c3:
                if c4 == c5:
                    return "Full House"
                return "Two Pairs"
            if c4 == c5:
                return "Two Pairs"
            return "One Pair"
        if c2 == c3:
            if c2 == c4:
                if c2 == c5:
                    return "Four of a Kind"
                return "Three of a Kind"
            if c4 == c5:
                return "Two Pairs"
            return "One Pair"
        if c4 == c3:
            if c4 == c5:
                return "Three of a Kind"
            return "One Pair"
        if c4 == c5:
            return "One Pair"
        
        return "High Card"

pokerFile = open("ez0054.txt", "r")
pokerHands = []

for row in pokerFile:
    row = row.strip()
    row = row.split(" ")
    pokerHands.append([row[0:5], row[5:]])
    
p1Score = 0
p2Score = 0
tie = 0

for hands in pokerHands:
    p1Hand = Hand(hands[0])
    p2Hand = Hand(hands[1])
    print(p1Hand.getHand(), "/", p2Hand.getHand())
    print(p1Hand, "/", p2Hand)
    
    
    if p1Hand > p2Hand:
        p1Score += 1
        print("Player 1 wins")
    elif p2Hand > p1Hand:
        p2Score += 1
        print("Player 2 wins")
    elif p1Hand == p2Hand:
        tie += 1
        
    print("\n")

print(p1Score, p2Score, tie)