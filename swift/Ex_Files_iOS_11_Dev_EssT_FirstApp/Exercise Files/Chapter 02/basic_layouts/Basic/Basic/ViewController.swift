//
//  ViewController.swift
//  Basic
//
//  Created by Nix on 1/18/18.
//  Copyright © 2018 NXN. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet weak var nameInput: UITextField!
    @IBOutlet weak var myNameLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
    }
    @IBAction func didTapButton(_ sender: Any) {
        if let name = nameInput.text {
            myNameLabel.text = "Hi \(name)!"
            nameInput.resignFirstResponder()
        }
    }
    
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        view.endEditing(true)
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

