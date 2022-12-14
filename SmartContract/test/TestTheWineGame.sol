// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// These files are dynamically created at test time
import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/TheWineGame.sol";
import "./ERC721Holder.sol";

contract TestTheWineGame is ERC721Holder {
    function mint1Cork(TheWineGame twg) internal {
        string[5] memory guests = ["Kira", "Luna", "Penelope", "Gaspar", "Wesley"];
        twg.mint(guests, "Modern Art Week opening.", 7815685979654, "Salton", "Red wine");
    }

    function mint2Corks(TheWineGame twg) internal {
        string[5] memory guests = ["Kira", "Luna", "Penelope", "Gaspar", "Wesley"];
        twg.mint(guests, "Higgs boson discovery.", 258947613594, "Pata Negra", "Red wine");
        twg.mint(guests, "Modern Art Week opening.", 7815685979654, "Salton", "Red wine");
    }

    function testInitialBalanceOfCorks() public {
        TheWineGame twg = TheWineGame(DeployedAddresses.TheWineGame());

        uint expected = 0;

        Assert.equal(twg.balanceOf(tx.origin), expected, "Owner should wave no corks.");
    }

    function testBalanceAfterMintCorks() public {
        TheWineGame twg = TheWineGame(DeployedAddresses.TheWineGame());

        mint2Corks(twg);

        uint expected = 2;

        Assert.equal(twg.balanceOf(address(this)), expected, "Owner should have 2 corks.");
    }
}